'use client'
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { motion } from 'framer-motion'
const FloatingElements: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer({ alpha: true })
        renderer.setSize(window.innerWidth, window.innerHeight)
        if (containerRef.current) {
            containerRef.current.appendChild(renderer.domElement)
        }

        const floatingGeometry = new THREE.SphereGeometry(1, 32, 32)
        const floatingMaterial = new THREE.MeshStandardMaterial({ color: 'orange' })
        const floatingBall = new THREE.Mesh(floatingGeometry, floatingMaterial)
        scene.add(floatingBall)
        const light = new THREE.AmbientLight(0xffffff, 1)
        scene.add(light)
        const animate = () => {
            requestAnimationFrame(animate)
            floatingBall.position.y = Math.sin(Date.now()  0.002)  2
            renderer.render(scene, camera)
        }
        camera.position.z = 5
        animate()
        return () => {
            if (containerRef.current) {
                containerRef.current.removeChild(renderer.domElement)
            }
        }
    }, [])
    return (<>
<div ref={containerRef} className="w-full h-screen flex justify-center items-center bg-white">
            <motion.h1 
                className="absolute text-6xl font-bold text-orange-600"
                initial={{ opacity: 0, y: -50 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}

                Welcome to GlamCS
            </motion.div>
            <motion.p 
                className="absolute text-xl text-orange-500 mt-10"
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}

                Elevate your beauty with our premium cosmetics designed for every glam occasion.
            </motion.div>
        </div>
</>)
}
export default FloatingElements
);