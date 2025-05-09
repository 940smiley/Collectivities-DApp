export async function scanCard(imageFile) {
  const formData = new FormData()
  formData.append("image", imageFile)

  const res = await fetch("http://localhost:5000/scan-card", {
    method: "POST",
    body: formData
  })

  if (!res.ok) {
    throw new Error("Failed to scan card")
  }

  return await res.json()
}
