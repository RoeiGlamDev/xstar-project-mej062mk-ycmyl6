'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface TeamMember {
  name: string
  role: string
  description: string
  imageUrl: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophie Chen',
    role: 'Founder & CEO',
    description: 'With over a decade of experience in the cosmetics industry, Sophie has a passion for beauty and innovation, driving GlamCS to redefine luxury cosmetics.',
    imageUrl: '/images/sophie-chen.jpg',
  },
  {
    name: 'Marcus Lane',
    role: 'Head of Product Development',
    description: 'Marcus blends science with art, developing products that not only enhance beauty but also nourish the skin.',
    imageUrl: '/images/marcus-lane.jpg',
  },
  {
    name: 'Ava Rodriguez',
    role: 'Marketing Director',
    description: 'Ava has a knack for connecting GlamCS with beauty enthusiasts around the world, ensuring our mission of luxurious beauty reaches every corner.',
    imageUrl: '/images/ava-rodriguez.jpg',
  },
]
const AboutSection: React.FC = () => {
  return (<>
<div className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-orange-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}

          About GlamCS
        </motion.div>
        
        <motion.p
          className="mt-6 text-lg text-gray-800 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}

          At GlamCS, we believe that beauty is a form of self-expression. Our mission is to create high-end cosmetics that empower individuals to express their unique beauty. Founded in 2023, GlamCS combines luxury with ethical practices, ensuring that all our products are cruelty-free and made with premium ingredients.
        </motion.div>

        <motion.h3
          className="mt-12 text-xl font-semibold text-orange-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}

          Our Mission
        </motion.div>
        
        <motion.p
          className="mt-4 text-lg text-gray-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}

          Our mission at GlamCS is to inspire confidence and creativity through luxurious yet accessible cosmetics. We strive to innovate and lead in the cosmetics industry while emphasizing sustainability and ethical standards.
        </motion.div>

        <motion.h3
          className="mt-12 text-xl font-semibold text-orange-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}

          Meet Our Team
        </motion.div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}

              <img src={member.imageUrl} alt={member.name} className="object-cover rounded-lg mb-4" />
              <h4 className="text-md font-bold text-orange-500">{member.name}</h4>
              <p className="text-sm italic text-gray-500">{member.role}</p>
              <p className="mt-2 text-sm text-gray-700">{member.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}

          <button className="bg-orange-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-orange-600 transition-colors mt-4">
            Explore Our Products
          </button>
        </motion.div>
      </div>
    </div>
</>)
}
export default AboutSection
);