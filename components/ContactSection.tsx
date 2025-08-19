'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
interface ContactFormValues {
  name: string
  email: string
  message: string
  reason: string
}

const initialValues: ContactFormValues = {
  name: '',
  email: '',
  message: '',
  reason: 'General Inquiry',
}
const ContactSection: React.FC = () => {
  const [formValues, setFormValues] = useState<ContactFormValues>(initialValues)
  const [errors, setErrors] = useState<Partial<ContactFormValues>>({})
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }
  const validate = () => {
    const newErrors: Partial<ContactFormValues> = {}
    if (!formValues.name) newErrors.name = 'Name is required'
    if (!formValues.email) newErrors.email = 'Email is required'
    if (!/\S+@\S+\.\S+/.test(formValues.email)) newErrors.email = 'Email is invalid'
    if (!formValues.message) newErrors.message = 'Message is required'
    return newErrors
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors)
      return
    }
    // Handle form submission logic here, e.g., send data to server
    console.log('Form submitted:', formValues)
    setFormValues(initialValues)
    setErrors({})
  }
  return (<>
<section className="bg-white text-orange-600 py-16 px-8">
      <motion.h2
        className="text-3xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}

        Contact GlamCS
      </motion.div>
      <p className="text-center mb-8">For inquiries regarding our luxurious cosmetic products, fill out the form below.</p>
      <motion.form 
        className="max-w-lg mx-auto bg-orange-50 p-6 rounded shadow-lg"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}

        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formValues.name}
            onChange={handleChange}
            className={border rounded w-full py-2 px-3 text-gray-700 ${errors.name ? 'border-red-500' : 'border-orange-300'}}
            placeholder="Your Name"
            required
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formValues.email}
            onChange={handleChange}
            className={border rounded w-full py-2 px-3 text-gray-700 ${errors.email ? 'border-red-500' : 'border-orange-300'}}
            placeholder="Your Email"
            required
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="reason" className="block mb-2">Reason for Contact:</label>
          <select
            name="reason"
            id="reason"
            value={formValues.reason}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3 text-gray-700 border-orange-300"

            <option value="General Inquiry">General Inquiry</option>
            <option value="Product Feedback">Product Feedback</option>
            <option value="Order Status">Order Status</option>
            <option value="Partnership">Partnership</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2">Message:</label>
          <textarea
            name="message"
            id="message"
            value={formValues.message}
            onChange={handleChange}
            className={border rounded w-full py-2 px-3 text-gray-700 ${errors.message ? 'border-red-500' : 'border-orange-300'}}
            placeholder="Your Message"
            required
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>
        <button
          type="submit"
          className="bg-orange-600 text-white font-bold py-2 px-4 rounded hover:bg-orange-500 transition duration-300 ease-in-out"

          Send Message
        </button>
      </motion.div>

      <div className="mt-10 max-w-lg mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-4">Business Information</h3>
        <p className="mb-2">GlamCS</p>
        <p className="mb-2">123 Glamour St.</p>
        <p className="mb-2">Beauty City, BC 12345</p>
        <p className="mb-2">Phone: (123) 456-7890</p>
        <p className="mb-2">Email: contact@glamcs.com</p>
        <p className="mb-2">Business Hours: Monday - Friday, 9 AM - 5 PM</p>
      </div>
    </section>
</>)
}
export default ContactSection
);