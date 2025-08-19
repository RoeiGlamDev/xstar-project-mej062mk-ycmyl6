'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface SlideUpProps {
  children: React.ReactNode
}

const SlideUp: React.FC<SlideUpProps> = ({ children }) => {
  const slideUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }
  return (<>
<motion.div
      initial="hidden"
      animate="visible"
      variants={slideUpVariants}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg rounded-lg p-6 mt-4"
      role="alert"
      aria-live="polite"

      {children}
    </motion.div>
</>)
}
const GlamCSSlideUp: React.FC = () => {
  return (<>
<SlideUp>
      <h2 className="text-2xl font-bold text-orange-600 mb-2">Welcome to GlamCS</h2>
      <p className="text-gray-700">
        Elevate your beauty routine with GlamCS's luxurious range of high-quality cosmetics. Our products are designed to enhance your natural beauty, utilizing innovative formulas that ensure a flawless finish.
      </p>
      <button
        className="mt-4 bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-500 transition duration-300 ease-in-out"
        onClick={() => alert('Discover our luxury products!')}

        Shop Now
      </button>
    </SlideUp>
</>)
}
export default GlamCSSlideUp
);