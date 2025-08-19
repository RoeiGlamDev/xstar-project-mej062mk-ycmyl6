'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface PricingTier {
  title: string
  price: string
  features: string[]
}

const pricingTiers: PricingTier[] = [
  {
    title: 'Glam Starter',
    price: '$29',
    features: [
      'Basic makeup application',
      'Skin consultation',
      'Complimentary product samples',
    ],
  },
  {
    title: 'Glam Deluxe',
    price: '$59',
    features: [
      'Advanced makeup application',
      'Personalized skin analysis',
      'Custom product selection',
      'Exclusive GlamCS discounts',
    ],
  },
  {
    title: 'Glam Luxury',
    price: '$99',
    features: [
      'Professional makeup session',
      'Complete skin treatment',
      'One-on-one consultation with our beauty experts',
      'Free GlamCS gift package',
    ],
  },
]
const PricingSection: React.FC = () => {
  return (<>
<section className="py-10 bg-white">
      <div className="container mx-auto text-center mb-10">
        <motion.h2
          className="text-4xl font-bold text-orange-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}

          Pricing Plans at GlamCS
        </motion.div>
        <motion.p
          className="text-lg text-gray-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}

          Choose the perfect GlamCS service tailored to your beauty needs.
        </motion.div>
      </div>
      <div className="flex flex-col md:flex-row justify-center">
        {pricingTiers.map((tier) => (
          <motion.div
            key={tier.title}
            className="bg-white border border-gray-300 rounded-lg shadow-lg m-4 p-6 flex-1 transition-transform transform hover:scale-105"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}

            <h3 className="text-2xl font-semibold text-orange-600 mb-4">{tier.title}</h3>
            <p className="text-xl font-bold text-gray-800 mb-4">{tier.price}</p>
            <ul className="list-disc list-inside mb-4">
              {tier.features.map((feature) => (
                <li key={feature} className="text-gray-600">{feature}</li>
              ))}
            </ul>
            <button className="mt-4 bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-500 transition duration-300">
              Choose Plan
            </button>
          </motion.div>
        ))}
      </div>
    </section>
</>)
}
export default PricingSection
);