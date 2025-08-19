'use client'
export default function HeroSection() {
  return (
import React from 'react'
import { motion } from 'framer-motion'
interface HeroSectionProps {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink
}) => {
  return (
    <section className="flex items-center justify-center h-screen bg-gradient-to-r from-orange-500 to-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"

        <h1 className="text-5xl font-bold text-orange-600 mb-4">
          GlamCS
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          Discover the elegance in beauty with GlamCS's premium cosmetics tailored for the modern you.
        </p>
        <
)
  )
}
