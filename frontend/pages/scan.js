import { useState } from 'react'
import { scanCard } from '@/utils/ocr'
import { useMintCard } from '@/utils/contract'

export default function ScanPage() {
  const [cardData, setCardData] = useState(null)
  const [file, setFile] = useState(null)
  const { write, isLoading, isSuccess } = useMintCard()

  const handleFileChange = async (e) => {
    const imageFile = e.target.files[0]
    setFile(URL.createObjectURL(imageFile))
    const data = await scanCard(imageFile)
    setCardData(data)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-10">
      <h1 className="text-4xl font-bold mb-6">🧠 Scan Trading Card</h1>
      <input type="file" accept="image/*" onChange={handleFileChange} className="mb-4" />
      {file && <img src={file} className="w-64 mb-4 rounded shadow-lg" />}
      {cardData && (
        <div className="bg-white bg-opacity-10 p-4 rounded-xl space-y-2">
          <p><strong>Name:</strong> {cardData.name}</p>
          <p><strong>Number:</strong> {cardData.number}</p>
          <p><strong>Set:</strong> {cardData.set}</p>
          <p><strong>Brand:</strong> {cardData.brand}</p>
          <button onClick={() => write?.()} disabled={isLoading}
            className="mt-4 bg-green-600 hover:bg-green-700 px-6 py-2 rounded shadow-xl transition">
            {isLoading ? 'Minting...' : 'Mint as NFT'}
          </button>
          {isSuccess && <p className="text-green-400 mt-2">✅ Minted successfully!</p>}
        </div>
      )}
    </div>
  )
}
