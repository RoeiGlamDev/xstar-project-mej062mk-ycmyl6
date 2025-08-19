'use client'
import React, { useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion'
interface SceneProps {
  title: string
}

const Scene: React.FC<SceneProps> = ({ title }) => {
  useEffect(() => {
    // Initialize any additional effects or configurations
  }, [])
  return (<>
<div className="flex flex-col items-center justify-center w-full h-full bg-white">
      <motion.h1
        className="text-4xl font-bold text-orange-600 mb-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}

        Welcome to {title}
      </motion.div>
      <div className="w-full h-full max-w-4xl">
        <Canvas>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <mesh rotation={[0, 0, 0]} position={[0, 0, 0]}>
            <sphereBufferGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="#FF6F20" />
          </mesh>
          <OrbitControls />
        </Canvas>
      </div>
      <motion.p
        className="text-lg text-gray-800 mt-4 text-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}

        Explore the luxurious world of GlamCS cosmetics, where elegance meets sophistication. 
        Discover our exclusive range of high-end beauty products designed to enhance your natural beauty.
      </motion.div>
    </div>
</>)
}
export default Scene
);