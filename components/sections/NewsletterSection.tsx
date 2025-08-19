'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
interface NewsletterSectionProps {
  title: string
  subtitle: string
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({ title, subtitle }) => {
  const [email, setEmail] = useState('')
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission logic here
    console.log('Email submitted:', email)
    setEmail('')
  }
  return (<>
<div className="flex flex-col items-center justify-center py-10 bg-white">
      <motion.h2
        className="text-4xl font-bold text-orange-500 mb-4"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}

        {title}
      </motion.div>
      <motion.p
        className="text-lg text-gray-700 mb-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}

        {subtitle}
      </motion.div>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row mb-4">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 mb-4 md:mb-0 md:mr-4 border-2 border-orange-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
        <motion.button
          type="submit"
          className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg transition-transform transform hover:scale-105"
          whileHover={{ scale: 1.05 }}

          Subscribe
        </motion.div>
      </form>
      <motion.p
        className="text-sm text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}

        Join the GlamCS beauty community and stay updated with our latest products and offers!
      </motion.div>
    </div>
</>)
}
export default NewsletterSection
);