'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface CTASectionProps {
  title: string
  subtitle: string
  buttonText: string
}

const CTASection: React.FC<CTASectionProps> = ({ title, subtitle, buttonText }) => {
  return (<>
<div className="flex flex-col items-center justify-center py-20 bg-white">
      <motion.h2
        className="text-4xl font-bold text-orange-500 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}

        {title}
      </motion.div>
      <motion.p
        className="text-lg text-gray-700 mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}

        {subtitle}
      </motion.div>
      <motion.button
        className="bg-orange-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
        whileHover={{ scale: 1.05, boxShadow: '0 4px 20px rgba(255, 165, 0, 0.5)' }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.location.href = '/shop'}

        {buttonText}
      </motion.div>
    </div>
</>)
}
export default CTASection
);