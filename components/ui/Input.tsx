'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
interface InputProps {
  label: string
  type?: string
  name: string
  placeholder: string
  required?: boolean
  validationMessage?: string
}

const Input: React.FC<InputProps> = ({ label, type = 'text', name, placeholder, required = false, validationMessage }) => {
  const [value, setValue] = useState('')
  const [isTouched, setIsTouched] = useState(false)
  const handleBlur = () => {
    setIsTouched(true)
  }
  const isValid = required ? value.trim() !== '' : true
  return (<>
<div className="mb-6">
      <label className="block text-lg font-semibold text-orange-600 mb-2" htmlFor={name}>
        {label}
      </label>
      <motion.input
        id={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleBlur}
        className={w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-300 ${
          !isValid && isTouched ? 'border-red-500' : 'border-gray-300'
        }}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      />
      {!isValid && isTouched && validationMessage && (
        <p className="text-red-500 text-sm mt-1">{validationMessage}</p>
      )}
    </div>
</>)
}
export default Input
);