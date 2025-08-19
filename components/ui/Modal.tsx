'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  content: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null
  return (<>
<div className="fixed inset-0 flex items-center justify-center z-50">
      <motion.div 
        className="modal-backdrop fixed inset-0 bg-black opacity-50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div 
        className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative mt-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.3 }}

        <h2 className="text-orange-500 text-2xl font-bold mb-4">
          {title}
        </h2>
        <div className="mb-4">
          {content}
        </div>
        <button
          onClick={onClose}
          className="bg-orange-500 text-white font-semibold py-2 px-4 rounded transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"

          Close
        </button>
      </motion.div>
    </div>
</>)
}
export default Modal
);