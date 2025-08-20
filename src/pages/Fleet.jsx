import React from 'react'

const cars = [
  { name:'Toyota Innova', seats:'7', bags:'4', ac:true },
  { name:'Innova Crysta', seats:'7', bags:'4', ac:true },
  { name:'Swift Dzire', seats:'4', bags:'2', ac:true },
  { name:'Ertiga', seats:'6', bags:'3', ac:true },
]

export default function Fleet() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Our Fleet</h1>
      <div className="grid md:grid-cols-4 gap-6">
        {cars.map((c, i) => (
          <div key={i} className="border border-white/10 rounded-2xl p-5 bg-white/5 backdrop-blur">
            <div className="font-semibold">{c.name}</div>
            <div className="text-sm text-slate-300 mt-2">Seats: {c.seats} • Bags: {c.bags} • AC: {c.ac ? 'Yes' : 'No'}</div>
            <div className="mt-3 text-xs text-slate-400">Clean interiors • Music system • Sanitized</div>
          </div>
        ))}
      </div>
    </div>
  )
}
