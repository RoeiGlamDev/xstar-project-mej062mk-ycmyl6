'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface Feature {
  id: number
  title: string
  description: string
  icon: JSX.Element
}

const features: Feature[] = [
  {
    id: 1,
    title: 'High-Quality Ingredients',
    description: 'At GlamCS, our cosmetics are made from premium ingredients that ensure a luxurious experience.',
    icon: <i className="fas fa-leaf text-orange-500"></i>,
  },
  {
    id: 2,
    title: 'Luxurious Packaging',
    description: 'Our products come in elegantly designed packaging that reflects sophistication and style.',
    icon: <i className="fas fa-gift text-orange-500"></i>,
  },
  {
    id: 3,
    title: 'Expert Consultations',
    description: 'Personalized beauty consultations available to help you choose the perfect products for your needs.',
    icon: <i className="fas fa-user-check text-orange-500"></i>,
  },
  {
    id: 4,
    title: 'Cruelty-Free',
    description: 'GlamCS is proud to be cruelty-free, ensuring our products never harm animals.',
    icon: <i className="fas fa-paw text-orange-500"></i>,
  },
]
const FeaturesSection: React.FC = () => {
  return (<>
<section className="py-20 bg-white" id="features">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-600 mb-8">Discover GlamCS Features</h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}

              <div className="flex items-center justify-center mb-4 text-5xl">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-orange-600 mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
</>)
}
export default FeaturesSection
);