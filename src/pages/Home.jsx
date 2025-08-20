import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <section className="relative">
        <video className="w-full max-h-[70vh] object-cover" autoPlay muted loop playsInline>
          <source src="https://files.catbox.moe/5tlnb7.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-5xl font-bold">Explore Gujarat in Comfort</h1>
            <p className="mt-3 text-sm md:text-base">Innova & premium cabs • Family trips • Corporate travel • Airport transfers</p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <Link to="/tours" className="bg-white text-gray-900 px-5 py-2 rounded-full font-medium">View Tours</Link>
              <Link to="/contact" className="bg-gray-900 text-white px-5 py-2 rounded-full font-medium">Get a Quote</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-4">Why choose Richirich?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t:'Clean, comfy vehicles', d:'Well-maintained Innova/Crysta & premium sedans/SUVs.'},
            { t:'Experienced drivers', d:'Local experts for safe, smooth journeys.'},
            { t:'Transparent pricing', d:'No hidden charges. Clear quotes.'}
          ].map((i, idx) => (
            <div key={idx} className="border rounded-2xl p-6">
              <div className="text-lg font-semibold">{i.t}</div>
              <p className="text-sm mt-2 text-gray-600">{i.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-4">Popular Tours</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title:'Dwarka–Somnath–Gir', img:'https://source.unsplash.com/featured/?temple,india' },
              { title:'Statue of Unity', img:'https://source.unsplash.com/featured/?statue,india' },
              { title:'Kutch – White Rann', img:'https://source.unsplash.com/featured/?desert' }
            ].map((t, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border bg-white">
                <img src={t.img} alt={t.title} className="h-48 w-full object-cover" />
                <div className="p-4">
                  <div className="font-semibold">{t.title}</div>
                  <p className="text-sm text-gray-600 mt-1">Customizable itinerary • Hotel pickup • Clean cab</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link to="/tours" className="underline">See all tours →</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
