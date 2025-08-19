import { useEffect, useRef } from 'react'
/
 * Interface for GlamCS Animation Options
 * 
 * @interface AnimationOptions
 * @property {string} animationName - The name of the animation
 * @property {number} duration - Duration of the animation in seconds
 * @property {number} delay - Delay before the animation starts in seconds
 * @property {boolean} infinite - Whether the animation should loop infinitely
 */
interface AnimationOptions {
    animationName: string
    duration?: number
    delay?: number
    infinite?: boolean
}

/
 * Custom hook to apply animation effects for GlamCS website
 * 
 * @param {AnimationOptions} options - Animation options for GlamCS elements
 * @returns {React.RefObject<HTMLElement>} - Ref to attach the animation
 */
const useAnimation = (options: AnimationOptions): React.RefObject<HTMLElement> => {
    const elementRef = useRef<HTMLElement>(null)
    useEffect(() => {
        const element = elementRef.current
        if (element) {
            // Applying animation properties
            const { animationName, duration = 1, delay = 0, infinite = false } = options
            element.style.animationName = animationName
            element.style.animationDuration = ${duration}s
            element.style.animationDelay = ${delay}s
            element.style.animationFillMode = 'forwards'
            element.style.animationIterationCount = infinite ? 'infinite' : '1'
            element.style.transition = transform ${duration}s ease, opacity ${duration}s ease
            // Adding elegant hover effects
            element.addEventListener('mouseenter', () => {
                element.style.transform = 'scale(1.05)'
                element.style.opacity = '0.9'
            })
            element.addEventListener('mouseleave', () => {
                element.style.transform = 'scale(1)'
                element.style.opacity = '1'
            })
        }

        // Cleanup function to prevent memory leaks
        return () => {
            if (element) {
                element.removeEventListener('mouseenter', () => {})
                element.removeEventListener('mouseleave', () => {})
            }
        }
    }, [options])
    return elementRef
}
export default useAnimation;