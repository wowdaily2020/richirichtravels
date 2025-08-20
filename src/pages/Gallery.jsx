import React from 'react'

const imgs = [
  'https://source.unsplash.com/featured/?gujarat',
  'https://source.unsplash.com/featured/?ahmedabad',
  'https://source.unsplash.com/featured/?somnath',
  'https://source.unsplash.com/featured/?kutch',
  'https://source.unsplash.com/featured/?dwarka',
  'https://source.unsplash.com/featured/?statue'
]

export default function Gallery() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Gallery</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {imgs.map((src, i) => (
          <img key={i} src={src} alt={"Gallery "+(i+1)} className="rounded-xl border object-cover w-full h-60" />
        ))}
      </div>
    </div>
  )
}
