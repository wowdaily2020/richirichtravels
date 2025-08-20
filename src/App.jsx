import React, { useState } from 'react'
import { Outlet, NavLink } from 'react-router-dom'

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        'px-4 py-2 rounded-full text-sm transition ' +
        (isActive ? 'bg-gray-900 text-white' : 'hover:bg-gray-100')
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
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Richirich Travels Logo" className="h-10 w-10 rounded-full object-contain" />
            <div className="leading-tight">
              <div className="font-bold text-lg">Richirich Travels</div>
              <div className="text-xs text-gray-500">Gujarat Tours & Cab Service</div>
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
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg border">
            <span className="sr-only">Toggle menu</span>☰
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t px-4 pb-3">
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

      <footer className="border-t">
        <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="font-semibold mb-2">Richirich Travels</div>
            <p>Premium cab & tour services across Gujarat. Innova, Crysta, and more. Professional drivers. Transparent pricing.</p>
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
            <p>Sainath Society, Kukarwada - Nr. Gandhinagar, Gujarat</p>
<p>Operating Hours: Daily 9 AM - 7 PM, Monday - Saturday</p>
<p><a className='hover:underline' href='https://bit.ly/Richirichtravels' target='_blank' rel='noreferrer'>WhatsApp Us for Instant Support</a></p>
            <p>Phone: +91-9978113276</p>
            <p>Email: richirichtoursandtravels@gmail.com</p>
          </div>
          <div>
            <div className="font-semibold mb-2">Follow</div>
            <div className="flex gap-2">
              <a className="px-3 py-1 border rounded-full" href="#" target="_blank" rel="noreferrer">Instagram</a>
              <a className="px-3 py-1 border rounded-full" href="#" target="_blank" rel="noreferrer">Facebook</a>
              <a className="px-3 py-1 border rounded-full" href="#" target="_blank" rel="noreferrer">YouTube</a>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 pb-6">© {new Date().getFullYear()} Richirich Travels. All rights reserved.</div>
      </footer>

<a
  href="https://bit.ly/Richirichtravels"
  target="_blank"
  rel="noreferrer"
  className="fixed bottom-5 right-5 z-50 px-4 py-3 rounded-full shadow-lg bg-green-500 text-white font-medium hover:opacity-90"
  aria-label="WhatsApp Us"
  title="WhatsApp Us"
>
  WhatsApp Us
</a>
    </div>
  )
}
