'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface CardProps {
  title: string
  description: string
  imageUrl: string
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (<>
<motion.div
      className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border border-orange-400 transition-transform transform hover:scale-105 hover:shadow-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}

      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="p-6">
        <h3 className="font-bold text-2xl text-orange-500">{title}</h3>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </motion.div>
</>)
}
export default Card
);