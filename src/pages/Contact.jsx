import React, { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-2">Get a Quote / Book Now</h1>
      <p className="text-gray-600 mb-6">Fill the form and we’ll get back within a few hours.</p>

      {sent ? (
        <div className="p-4 rounded-xl bg-green-50 border border-green-200">Thanks! We received your request.</div>
      ) : (
        <form name="booking" method="POST" data-netlify="true" onSubmit={() => setSent(true)} className="grid md:grid-cols-2 gap-4 border rounded-2xl p-5 bg-white">
          <input type="hidden" name="form-name" value="booking" />
          <label className="text-sm">Full Name
            <input required name="name" className="mt-1 w-full border rounded-lg px-3 py-2" placeholder="Your name" />
          </label>
          <label className="text-sm">Phone (WhatsApp)
            <input required name="phone" className="mt-1 w-full border rounded-lg px-3 py-2" placeholder="+91..." />
          </label>
          <label className="text-sm">Email
            <input name="email" type="email" className="mt-1 w-full border rounded-lg px-3 py-2" placeholder="you@example.com" />
          </label>
          <label className="text-sm">Travel Date
            <input name="date" type="date" className="mt-1 w-full border rounded-lg px-3 py-2" />
          </label>
          <label className="text-sm md:col-span-2">Pickup City
            <input name="pickup" className="mt-1 w-full border rounded-lg px-3 py-2" placeholder="Ahmedabad / Vadodara / Rajkot ..." />
          </label>
          <label className="text-sm md:col-span-2">Message
            <textarea name="message" rows="4" className="mt-1 w-full border rounded-lg px-3 py-2" placeholder="Trip details, places to cover, number of passengers..."></textarea>
          </label>
          <div className="md:col-span-2 flex items-center justify-between">
            <div className="text-xs text-gray-500">By submitting, you agree to our privacy policy.</div>
            <button className="px-5 py-2 rounded-full bg-gray-900 text-white" type="submit">Send</button>
          </div>
        </form>
      )}

      <div className="mt-8 text-sm text-gray-700">
        <div className="font-medium">Call: +91-9978113276 | WhatsApp: https://bit.ly/Richirichtravels</div>
        <div>Email: richirichtoursandtravels@gmail.com</div>
        <div>Sainath Society, Kukarwada - Nr. Gandhinagar, Gujarat</div>
      </div>
    </div>
  )
}
