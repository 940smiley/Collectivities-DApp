# server.py
from flask import Flask, request, jsonify
import cv2
import pytesseract
import torch
import os
from werkzeug.utils import secure_filename
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
UPLOAD_FOLDER = './uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# Load YOLOv5 model
model = torch.hub.load('ultralytics/yolov5', 'custom', path=r"C:\chensvcs\repos\yolov5\runs\train\trading_card_reader5\weights\best.pt" ,force_reload=True)

def detect_and_ocr(image_path):
    img = cv2.imread(image_path)

    # Detect card region
    results = model(img)
    crops = results.crop(save=False)

    text_data = {"name": "", "number": "", "set": "", "brand": ""}
    
    for crop in crops:
        crop_img = crop['im']
        ocr_text = pytesseract.image_to_string(crop_img)
        print("OCR:", ocr_text)

        # Basic heuristic parsing
        if "Set" in ocr_text or "Edition" in ocr_text:
            text_data["set"] = ocr_text.strip()
        elif "#" in ocr_text:
            text_data["number"] = ocr_text.strip()
        elif any(brand in ocr_text for brand in ["NBA", "Topps", "Panini", "Hoops"]):
            text_data["brand"] = ocr_text.strip()
        else:
            text_data["name"] = ocr_text.strip()

    return text_data

@app.route("/scan-card", methods=["POST"])
def scan_card():
    if 'image' not in request.files:
        return jsonify({"error": "No image file"}), 400

    image = request.files['image']
    filename = secure_filename(image.filename)
    path = os.path.join(UPLOAD_FOLDER, filename)
    image.save(path)

    try:
        data = detect_and_ocr(path)
        return jsonify(data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
