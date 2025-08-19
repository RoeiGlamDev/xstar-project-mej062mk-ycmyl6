'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface FooterProps {
  companyName: string
  links: { name: string; url: string }[]
  socialMedia: { platform: string; url: string }[]
}

const Footer: React.FC<FooterProps> = () => {
  const companyName = "GlamCS"
  const links = [
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products' },
    { name: 'About Us', url: '/about' },
    { name: 'Contact', url: '/contact' },
  ]
  const socialMedia = [
    { platform: 'Instagram', url: 'https://instagram.com/glamcs' },
    { platform: 'Facebook', url: 'https://facebook.com/glamcs' },
    { platform: 'Twitter', url: 'https://twitter.com/glamcs' },
  ]
  return (<>
<footer className="bg-white text-orange-500 py-8">
      <div className="container mx-auto flex flex-col items-center">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}

          {companyName}
        </motion.div>
        <ul className="flex space-x-6 mb-4">
          {links.map((link) => (
            <li key={link.name}>
              <motion.a
                href={link.url}
                className="hover:text-orange-600 transition-colors"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}

                {link.name}
              </motion.div>
            </li>
          ))}
        </ul>
        <p className="text-center mb-4">
          © {new Date().getFullYear()} {companyName}. All Rights Reserved.
        </p>
        <div className="flex space-x-4">
          {socialMedia.map((media) => (
            <motion.a
              key={media.platform}
              href={media.url}
              className="hover:text-orange-600 transition-colors"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              target="_blank"
              rel="noopener noreferrer"

              {media.platform}
            </motion.div>
          ))}
        </div>
      </div>
    </footer>
</>)
}
export default Footer
);