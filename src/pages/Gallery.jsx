import React from 'react'

const imgs = [
  '/images/ahmedabad.jpg',
  '/images/somnath.jpg',
  '/images/gir.jpg',
  '/images/kutch.jpg',
  '/images/dwarka.jpg',
  '/images/statue-of-unity.jpg'
]

export default function Gallery() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Gallery</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {imgs.map((src, i) => (
          <img key={i} src={src} onError={(e)=> e.currentTarget.src='/placeholder.svg'} alt={"Gallery "+(i+1)} className="rounded-xl border border-white/10 object-cover w-full h-60 bg-white/5" />
        ))}
      </div>
    </div>
  )
}
