'use client'
import React from 'react'
import { motion } from 'framer-motion'
const ContactPage: React.FC = () => {
  
  const businessHours = [
    { day: 'Monday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Tuesday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Wednesday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Thursday', hours: '9:00 AM - 8:00 PM' },
    { day: 'Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 5:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ]
  return (<>
<motion.div 
      className="bg-white text-orange-600 min-h-screen flex flex-col items-center p-6"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}

      <h1 className="text-4xl font-bold mb-4 hover:underline">Contact GlamCS</h1>
      <p className="text-lg mb-8">We're here to help! Reach out to us for any inquiries regarding our luxurious cosmetics line.</p>

      <form className="bg-orange-100 p-6 rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/2">
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="name">Name</label>
          <input className="w-full border border-orange-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            type="text" id="name" placeholder="Your Name" required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="email">Email</label>
          <input className="w-full border border-orange-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            type="email" id="email" placeholder="Your Email" required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="message">Message</label>
          <textarea className="w-full border border-orange-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            id="message" rows={4} placeholder="Your Message" required></textarea>
        </div>
        <div className="flex justify-end">
          <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition duration-300" type="submit">Send Message</button>
        </div>
      </form>

      <div className="mt-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Location</h2>
        <p className="text-lg">Visit us at:</p>
        <p className="text-md font-medium">GlamCS Headquarters</p>
        <p className="text-md">123 Beauty Blvd, Glam City, CA 12345</p>
      </div>

      <div className="mt-8 text-center">
        <h3 className="text-2xl font-semibold mb-4">Business Hours</h3>
        <ul className="list-disc list-inside text-lg">
          {businessHours.map((hour) => (
            <li key={hour.day}>{hour.day}: {hour.hours}</li>
          ))}
        </ul>
      </div>
    </motion.div>
</>)
}
export default ContactPage
);