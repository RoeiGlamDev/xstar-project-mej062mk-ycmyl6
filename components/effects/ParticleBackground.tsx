'use client'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { useEffect } from 'react'
import { ParticleSystem } from './ParticleSystem'; // Adjust the import path as needed
import { motion } from 'framer-motion'
const ParticleBackground: React.FC = () => {
  return (<>
<div className="w-full h-screen overflow-hidden bg-white relative">
      <Canvas camera={{ position: [0, 0, 100], fov: 75 }}>
        <ParticleSystem />
      </Canvas>
      <motion.div 
        className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}

        <h1 className="text-orange-500 text-5xl font-bold mb-4">Welcome to GlamCS</h1>
        <p className="text-gray-700 text-xl text-center px-4">
          Discover our luxurious range of cosmetics designed to enhance your natural beauty.
          Experience the elegance and sophistication with GlamCS.
        </p>
        <motion.button 
          className="mt-6 px-4 py-2 bg-orange-500 text-white rounded-lg shadow-lg hover:bg-orange-400 transition ease-in-out duration-300"
          whileHover={{ scale: 1.05 }}

          Shop Now
        </motion.div>
      </motion.div>
    </div>
</>)
}
export default ParticleBackground
);