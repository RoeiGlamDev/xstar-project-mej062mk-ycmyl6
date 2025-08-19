'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface HeaderProps {
  logoSrc: string
}

const Header: React.FC<HeaderProps> = ({ logoSrc }) => {
  return (<>
<header className="bg-white shadow-lg py-4">
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}

          <img src={logoSrc} alt="GlamCS Logo" className="h-10" />
          <h1 className="text-2xl font-bold text-orange-500 ml-2">GlamCS</h1>
        </motion.div>

        <nav className="hidden md:flex space-x-8">
          <motion.a
            href="#products"
            className="text-gray-800 hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.05 }}

            Products
          </motion.div>
          <motion.a
            href="#about"
            className="text-gray-800 hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.05 }}

            About Us
          </motion.div>
          <motion.a
            href="#blog"
            className="text-gray-800 hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.05 }}

            Blog
          </motion.div>
          <motion.a
            href="#contact"
            className="text-gray-800 hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.05 }}

            Contact
          </motion.div>
        </nav>

        <div className="md:hidden">
          <button
            className="text-gray-800 focus:outline-none"
            aria-label="Open Mobile Menu"

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"

              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
</>)
}
export default Header
);