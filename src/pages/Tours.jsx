import React from 'react'

const tours = [
  {
    name: 'Dwarka–Somnath–Gir (4N/5D)',
    highlights: ['Dwarkadhish', 'Somnath', 'Gir Safari', 'Porbandar'],
    price: 'From ₹2,999 /person/day',
  },
  {
    name: 'Statue of Unity (1N/2D)',
    highlights: ['SOU Viewing Gallery', 'Sardar Sarovar Dam', 'Valley of Flowers'],
    price: 'From ₹2,499 /person/day',
  },
  {
    name: 'Kutch – White Rann (3N/4D)',
    highlights: ['Rann Utsav', 'Kala Dungar', 'Bhuj – Handicrafts'],
    price: 'From ₹2,799 /person/day',
  },
]

export default function Tours() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Tours</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {tours.map((t, i) => (
          <div key={i} className="border rounded-2xl p-5">
            <div className="font-semibold">{t.name}</div>
            <ul className="text-sm text-gray-600 mt-2 list-disc pl-5">
              {t.highlights.map((h, hi) => <li key={hi}>{h}</li>)}
            </ul>
            <div className="mt-3 text-sm font-medium">{t.price}</div>
            <a href="/contact" className="mt-4 inline-block px-4 py-2 rounded-full bg-gray-900 text-white text-sm">Request Quote</a>
          </div>
        ))}
      </div>
    </div>
  )
}
