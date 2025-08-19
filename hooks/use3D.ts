import { useEffect, useRef } from 'react'
import * as THREE from 'three'
/
 * Custom hook for integrating 3D interactions in GlamCS cosmetics website.
 * This hook leverages three.js to create engaging 3D visual elements for products,
 * enhancing user experience with modern and luxurious designs ideal for the cosmetics market.
 * 
 * @returns {Object} - Contains methods to initialize and animate 3D elements.
 * @property {Function} initializeScene - Initializes the 3D scene.
 * @property {Function} animate - Starts the animation loop for 3D elements.
 */
export function use3D() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  /
   * Initializes the 3D scene for GlamCS.
   * Sets up the scene, camera, lighting, and renderer.
   */
  const initializeScene = () => {
    if (!canvasRef.current) return
    // Create a new scene
    sceneRef.current = new THREE.Scene()
    // Initialize the camera
    cameraRef.current = new THREE.PerspectiveCamera(75, canvasRef.current.clientWidth / canvasRef.current.clientHeight, 0.1, 1000)
    cameraRef.current.position.z = 5
    // Set up the WebGL renderer
    rendererRef.current = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true })
    rendererRef.current.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight)
    rendererRef.current.setClearColor(0xffffff, 0)
    // Add ambient light for an elegant feel
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    sceneRef.current.add(ambientLight)
    // Create and add a 3D model of a GlamCS product (example placeholder geometry)
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshStandardMaterial({ color: 0xff8c00 }); // GlamCS signature orange
    const cube = new THREE.Mesh(geometry, material)
    sceneRef.current.add(cube)
  }
  /
   * Starts the animation loop for the 3D elements on the GlamCS site.
   * Rotates the 3D object to create an interactive experience.
   */
  const animate = () => {
    requestAnimationFrame(animate)
    // Example animation: rotate the cube for demonstration purposes
    if (sceneRef.current) {
      const cube = sceneRef.current.children.find(child => child instanceof THREE.Mesh)
      if (cube) {
        cube.rotation.x += 0.01
        cube.rotation.y += 0.01
      }
      
      // Render the scene
      rendererRef.current?.render(sceneRef.current, cameraRef.current)
    }
  }
  // Use effect to initialize the scene on component mount
  useEffect(() => {
    initializeScene()
    animate()
    return () => {
      // Cleanup logic can go here if necessary
    }
  }, [])
  return {
    canvasRef,
    initializeScene,
    animate,
  }
}