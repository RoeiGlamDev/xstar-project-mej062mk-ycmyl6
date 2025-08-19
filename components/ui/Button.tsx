'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface ButtonProps {
    variant?: 'primary' | 'secondary'
    children: React.ReactNode
    onClick?: () => void
    className?: string
}

const buttonVariants = {
    primary: 'bg-orange-500 text-white hover:bg-orange-400',
    secondary: 'bg-white text-orange-500 border border-orange-500 hover:bg-orange-100'
}
const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, onClick, className }) => {
    return (<>
<motion.button
            onClick={onClick}
            className={font-semibold py-3 px-6 rounded transition duration-300 ease-in-out ${buttonVariants[variant]} ${className}}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={Button for GlamCS cosmetics: ${children}}

            {children}
        </motion.div>
</>)
}
export default Button
);