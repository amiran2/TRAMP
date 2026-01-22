'use client'

import { useEffect, useState } from 'react'
import './style.css'

type Flower = {
  id: number
  name: string
  color: string
  price: number
}

type CreateFlowerDto = {
  name: string
  color: string
  price: number
}

export default function Home() {
  const [flowers, setFlowers] = useState<Flower[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchFlowers()
  }, [])

  async function fetchFlowers() {
    try {
      setLoading(true)
      setError(null)

      const res = await fetch('http://localhost:5555/api/fow', {
        method: 'GET',
      })

      if (!res.ok) throw new Error('Fetch error')

      const data = await res.json()
      setFlowers(data)
    } catch {
      setError('Ошибка загрузки')
    } finally {
      setLoading(false)
    }
  }

  async function createFlower() {
    try {
      setLoading(true)
      setError(null)

      const res = await fetch('http://localhost:5555/api/fow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Rose',
          color: 'Red',
          price: 10,
        } satisfies CreateFlowerDto),
      })

      if (!res.ok) {
        const text = await res.text()
        throw new Error(text)
      }

      await fetchFlowers()
    } catch (err) {
      setError('Ошибка создания')
    } finally {
      setLoading(false)
    }
  }

  return (
      <div className="min-h-screen w-full flex justify-center items-center">
        <div className="w-[420px] space-y-4">

          <button
              onClick={createFlower}
              className="w-full bg-black text-white p-2 rounded"
          >
            Add flower
          </button>

          {loading && <p>Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}

          {flowers.map(flower => (
              <div
                  key={flower.id}
                  className="border rounded-lg p-4 shadow-md"
              >
                <p><b>ID:</b> {flower.id}</p>
                <p><b>Name:</b> {flower.name}</p>
                <p><b>Color:</b> {flower.color}</p>
                <p><b>Price:</b> {flower.price}</p>
              </div>
          ))}

        </div>
      </div>
  )
}
