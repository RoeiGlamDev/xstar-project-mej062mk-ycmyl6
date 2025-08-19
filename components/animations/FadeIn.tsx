'use client'
import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
interface FadeInProps {
  children: React.ReactNode
}

const FadeIn: React.FC<FadeInProps> = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const controls = useAnimation()
  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, translateY: 0 })
    } else {
      controls.start({ opacity: 0, translateY: 50 })
    }
  }, [controls, inView])
  return (<>
<motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, translateY: 50 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-10"

      {children}
    </motion.div>
</>)
}
export default FadeIn
// Usage example within your components
/*
import FadeIn from './components/animations/FadeIn'
const GlamCSHomepage = () => {
  return (<>
<div className="bg-white min-h-screen p-6">
      <FadeIn>
        <h1 className="text-5xl font-bold text-orange-600">
          Welcome to GlamCS
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Experience the elegance of high-end cosmetics with GlamCS.
        </p>
      </FadeIn>
      
      <FadeIn>
        <h2 className="text-3xl font-semibold text-orange-600 mt-10">
          Our Luxury Products
        </h2>
        <p className="text-gray-600 my-4">
          Discover our exclusive range of modern beauty essentials. 
          Each product is crafted to enhance your natural beauty with a touch of glamour.
        </p>
      </FadeIn>
    </div>
</>)
}
*/
);