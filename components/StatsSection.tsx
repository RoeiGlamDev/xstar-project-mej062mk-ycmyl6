'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface StatProps {
  title: string
  value: number
  description: string
}

const statsData: StatProps[] = [
  { title: 'Happy Customers', value: 5000, description: 'Our thriving community of satisfied GlamCS users.' },
  { title: 'Products Launched', value: 120, description: 'Innovative cosmetics crafted with passion and quality.' },
  { title: 'Awards', value: 15, description: 'Recognized excellence in the cosmetics industry.' },
  { title: 'Global Reach', value: 35, description: 'Available in numerous countries worldwide.' },
]
const StatsSection: React.FC = () => {
  return (<>
<section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-600">GlamCS Achievements</h2>
        <p className="mt-2 text-lg text-gray-600">Celebrating our milestones in the beauty industry.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow ease-in-out duration-300 transform hover:scale-105 bg-orange-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2 }}

              <motion.h3 className="text-3xl font-bold text-orange-600">
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}

                {stat.value}
                </motion.span>
              </motion.div>
              <p className="mt-2 text-xl font-semibold text-gray-800">{stat.title}</p>
              <p className="mt-1 text-gray-600">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
</>)
}
export default StatsSection
);