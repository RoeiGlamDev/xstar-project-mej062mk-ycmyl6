'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface Testimonial {
    id: number
    name: string
    review: string
    rating: number
    photo: string
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Sophia J.',
        review: 'GlamCS has transformed my beauty routine! The quality of their products is unmatched, and the luscious texture feels like luxury on my skin.',
        rating: 5,
        photo: '/images/sophia.jpg',
    },
    {
        id: 2,
        name: 'Emma L.',
        review: 'I love the vibrant colors GlamCS offers. The lipstick I bought was not only high-end but also long-lasting. Highly recommend!',
        rating: 4,
        photo: '/images/emma.jpg',
    },
    {
        id: 3,
        name: 'Olivia S.',
        review: 'The GlamCS skincare line has made my skin glow! I can't believe the difference. Plus, their packaging is simply stunning!',
        rating: 5,
        photo: '/images/olivia.jpg',
    },
]
const TestimonialsSection: React.FC = () => {
    return (<>
<section className="bg-white py-10">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-orange-600 mb-8">What Our Customers Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map(testimonial => (
                        <motion.div 
                            key={testimonial.id}
                            className="border border-orange-300 rounded-lg p-6 bg-opacity-80 transition-transform transform hover:scale-105"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}>
                            <img 
                                src={testimonial.photo} 
                                alt={${testimonial.name}'s photo} 
                                className="w-16 h-16 rounded-full mb-4"
                            />
                            <h3 className="text-lg font-semibold text-orange-600">{testimonial.name}</h3>
                            <p className="text-gray-700 mb-4">Rating: {'★'.repeat(testimonial.rating)}</p>
                            <p className="text-gray-600 italic">"{testimonial.review}"</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
</>)
}
export default TestimonialsSection
);