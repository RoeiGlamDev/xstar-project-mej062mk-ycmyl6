'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface TeamMember {
  name: string
  role: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Reynolds',
    role: 'Founder & CEO',
    image: '/images/team/sophia.jpg',
  },
  {
    name: 'Liam Brooks',
    role: 'Head of Product Development',
    image: '/images/team/liam.jpg',
  },
  {
    name: 'Olivia Chen',
    role: 'Marketing Director',
    image: '/images/team/olivia.jpg',
  },
]
const GlamCSAbout: React.FC = () => {
  return (<>
<div className="bg-white text-orange-600 min-h-screen p-8">
      <motion.h1
        className="text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}

        About GlamCS
      </motion.div>

      <motion.section
        className="mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}

        <h2 className="text-2xl font-semibold mb-4">Our History</h2>
        <p className="text-lg">
          Founded in 2021, GlamCS emerged from a vision to empower individuals through high-quality, innovative cosmetics.
          Our founder, Sophia Reynolds, wanted to create a brand that not only provides luxurious beauty products but also
          promotes self-expression and confidence. With our roots in elegant design, we have quickly established our place
          in the competitive cosmetics industry by prioritizing quality and creativity.
        </p>
      </motion.section>

      <motion.section
        className="mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}

        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc list-inside space-y-2">
          <li className="text-lg">Integrity: We uphold the highest standards in product quality and ethical practices.</li>
          <li className="text-lg">Innovation: Continuously pushing the boundaries of beauty through modern formulations.</li>
          <li className="text-lg">Inclusivity: Celebrating diversity in beauty and offering products for everyone.</li>
        </ul>
      </motion.section>

      <motion.section
        className="mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}

        <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-orange-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"

              <img
                src={member.image}
                alt={member.name}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-lg">{member.role}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
</>)
}
export default GlamCSAbout
);