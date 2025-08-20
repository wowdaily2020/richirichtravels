import React, { useState } from 'react'
import { Outlet, NavLink } from 'react-router-dom'

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        'px-4 py-2 rounded-full text-sm transition ' +
        (isActive ? 'bg-white/10 text-white' : 'hover:bg-white/5 text-slate-200')
      }
      end
    >
      {children}
    </NavLink>
  )
}

export default function App() {
  const [open, setOpen] = useState(false)
  return (
    <div className="min-h-screen flex flex-col bg-ink">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/60 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Richirich Travels Logo" className="h-10 w-10 rounded-xl object-contain shadow-glow" />
            <div className="leading-tight">
              <div className="font-extrabold text-lg tracking-wide">Richirich Travels</div>
              <div className="text-xs text-slate-400">Premium Gujarat Tours & Cabs</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/tours">Tours</NavItem>
            <NavItem to="/fleet">Fleet</NavItem>
            <NavItem to="/gallery">Gallery</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </nav>
          <div className="hidden md:block">
            <a href="/contact" className="px-4 py-2 rounded-full bg-brand-500 hover:bg-brand-400 text-ink font-semibold shadow-glow">Book Now</a>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg border border-white/10 text-white">
            <span className="sr-only">Toggle menu</span>☰
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-white/10 px-4 pb-3">
            <div className="flex flex-wrap gap-2 py-3">
              <NavItem to="/">Home</NavItem>
              <NavItem to="/tours">Tours</NavItem>
              <NavItem to="/fleet">Fleet</NavItem>
              <NavItem to="/gallery">Gallery</NavItem>
              <NavItem to="/about">About</NavItem>
              <NavItem to="/contact">Contact</NavItem>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="font-semibold mb-2">Richirich Travels</div>
            <p className="text-slate-300">Premium cab &amp; tour services across Gujarat. Innova, Crysta, and more. Professional drivers. Transparent pricing.</p>
          </div>
          <div>
            <div className="font-semibold mb-2">Quick Links</div>
            <ul className="space-y-1">
              <li><a className="hover:underline" href="/tours">Tours</a></li>
              <li><a className="hover:underline" href="/fleet">Fleet</a></li>
              <li><a className="hover:underline" href="/gallery">Gallery</a></li>
              <li><a className="hover:underline" href="/contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Contact</div>
            <p>Office: Sainath Society, Kukarwada - Nr. Gandhinagar, Gujarat</p>
            <p>Hours: Mon–Sat, 9 AM – 7 PM</p>
            <p>Phone: <a className="hover:underline" href="tel:+919978113276">+91-9978113276</a></p>
            <p>Email: <a className="hover:underline" href="mailto:richirichtoursandtravels@gmail.com">richirichtoursandtravels@gmail.com</a></p>
            <p><a className="hover:underline" href="https://bit.ly/Richirichtravels" target="_blank" rel="noreferrer">WhatsApp Us for Instant Support</a></p>
          </div>
          <div>
            <div className="font-semibold mb-2">Follow</div>
            <div className="flex gap-2">
              <a className="px-3 py-1 border border-white/10 rounded-full hover:bg-white/5" href="#" target="_blank" rel="noreferrer">Instagram</a>
              <a className="px-3 py-1 border border-white/10 rounded-full hover:bg-white/5" href="#" target="_blank" rel="noreferrer">Facebook</a>
              <a className="px-3 py-1 border border-white/10 rounded-full hover:bg-white/5" href="#" target="_blank" rel="noreferrer">YouTube</a>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-slate-500 pb-6">© {new Date().getFullYear()} Richirich Travels. All rights reserved.</div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://bit.ly/Richirichtravels"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 px-4 py-3 rounded-full shadow-glow bg-emerald-500 text-white font-medium hover:opacity-90"
        aria-label="WhatsApp Us"
        title="WhatsApp Us"
      >
        WhatsApp Us
      </a>
    </div>
  )
}
