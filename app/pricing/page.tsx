'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface PricingOption {
  title: string
  price: string
  description: string
  features: string[]
}

const pricingOptions: PricingOption[] = [
  {
    title: 'Essential Glam Pack',
    price: '$49.99',
    description: 'Perfect for beginners seeking a touch of elegance.',
    features: ['Foundation', 'Lipstick', 'Mascara', 'Blush', 'Free sample of our latest product'],
  },
  {
    title: 'Luxury Glam Pack',
    price: '$99.99',
    description: 'For those who value sophistication in their beauty routine.',
    features: ['Foundation', 'Lipstick', 'Mascara', 'Blush', 'Highlighter', 'Full-sized skincare product'],
  },
  {
    title: 'Exclusive Glam Elite Package',
    price: '$149.99',
    description: 'The ultimate glam experience for makeup enthusiasts.',
    features: ['All items from Luxury Pack', 'Special edition lipstick', 'Free virtual makeup consultation', 'Exclusive member discounts'],
  },
]
const faqs = [
  {
    question: 'What is included in the GlamCS packages?',
    answer: 'Each package includes a curated selection of our premium cosmetics tailored to enhance your natural beauty.',
  },
  {
    question: 'Do you offer returns on your products?',
    answer: 'Yes, we offer a 30-day return policy on all unopened products for your peace of mind.',
  },
  {
    question: 'How can I contact GlamCS for more information?',
    answer: 'You can reach our customer service via email at support@glamcs.com or by calling (123) 456-7890.',
  },
]
const PricingPage: React.FC = () => {
  return (<>
<div className="bg-white text-gray-800">
      <motion.header
        className="bg-orange-500 text-white text-center p-6 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}

        <h1 className="text-4xl font-bold">GlamCS Pricing</h1>
        <p className="mt-2 text-lg">Embrace beauty with elegance and luxury.</p>
      </motion.header>

      <div className="container mx-auto px-4">
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}

          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"

              <h2 className="text-2xl font-semibold text-orange-500">{option.title}</h2>
              <p className="text-2xl font-bold">{option.price}</p>
              <p className="mt-2">{option.description}</p>
              <ul className="mt-4 list-disc pl-5">
                {option.features.map((feature, idx) => (
                  <li key={idx} className="text-sm">{feature}</li>
                ))}
              </ul>
              <motion.button
                className="mt-6 bg-orange-500 text-white py-2 px-4 rounded-full transition-transform transform hover:scale-105"
                whileHover={{ scale: 1.05 }}

                Choose Package
              </motion.div>
            </div>
          ))}
        </motion.div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">Frequently Asked Questions</h2>
          <ul className="space-y-4">
            {faqs.map((faq, index) => (
              <li key={index} className="bg-gray-100 p-4 rounded-lg shadow">
                <h3 className="font-semibold">{faq.question}</h3>
                <p className="mt-2">{faq.answer}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
</>)
}
export default PricingPage
);