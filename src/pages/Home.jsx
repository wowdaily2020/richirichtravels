import React from 'react'
import { Link } from 'react-router-dom'

const Feature = ({title, desc}) => (
  <div className="border border-white/10 bg-white/5 backdrop-blur rounded-2xl p-6 hover:-translate-y-0.5 transition">
    <div className="text-lg font-semibold">{title}</div>
    <p className="text-sm mt-2 text-slate-300">{desc}</p>
  </div>
)

export default function Home() {
  return (
    <div>
      <section className="relative bg-hero-gradient">
        <div className="absolute inset-0 pointer-events-none opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-500 to-amber-200 drop-shadow">Explore Gujarat in Comfort</span>
            </h1>
            <p className="mt-4 text-slate-300">
              Innova & premium cabs • Family trips • Corporate travel • Airport transfers
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/tours" className="bg-brand-500 hover:bg-brand-400 text-ink px-5 py-2 rounded-full font-semibold shadow-glow">View Tours</Link>
              <Link to="/contact" className="bg-white/10 hover:bg-white/20 px-5 py-2 rounded-full font-semibold">Get a Quote</Link>
            </div>
            <div className="mt-6 text-xs text-slate-400">Trusted by families & corporates across Gujarat</div>
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
            <Feature key={idx} title={i.t} desc={i.d} />
          ))}
        </div>
      </section>

      <section className="bg-inkSoft">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-4">Popular Tours</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title:'Dwarka–Somnath–Gir', img:'/images/dwarka.jpg' },
              { title:'Statue of Unity', img:'/images/statue-of-unity.jpg' },
              { title:'Kutch – White Rann', img:'/images/kutch.jpg' }
            ].map((t, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur hover:-translate-y-0.5 transition">
                <img src={t.img} onError={(e)=> e.currentTarget.src='/placeholder.svg'} alt={t.title} className="h-48 w-full object-cover" />
                <div className="p-4">
                  <div className="font-semibold">{t.title}</div>
                  <p className="text-sm text-slate-300 mt-1">Customizable itinerary • Hotel pickup • Clean cab</p>
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
