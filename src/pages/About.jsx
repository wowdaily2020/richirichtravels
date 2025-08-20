import React from 'react'

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-4">About Richirich Travels</h1>
      <p className="text-gray-700">
        We are a Gujarat-based travel service focused on comfortable, reliable journeys.
        From short airport transfers to multi-day tours, our experienced drivers and clean vehicles
        ensure you travel with peace of mind.
      </p>
      <ul className="list-disc pl-6 mt-4 text-gray-700">
        <li>City & outstation rides</li>
        <li>Family & corporate packages</li>
        <li>Customized itineraries across Gujarat</li>
      </ul>
    </div>
  )
}
