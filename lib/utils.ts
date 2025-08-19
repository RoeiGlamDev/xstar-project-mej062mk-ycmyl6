import { CSSProperties } from 'react'
/
 * Utility functions for the GlamCS application.
 * GlamCS is a modern cosmetics brand focusing on high-end design and luxury experiences.
 * 
 * @module utils
 */

/
 * Defines colors used in the GlamCS branding.
 */
export const COLORS = {
    primary: '#FFA500', // Orange
    secondary: '#FFFFFF' // White
}
/
 * Interface for a cosmetic product.
 */
export interface CosmeticProduct {
    id: string
    name: string
    price: number
    description: string
    imageUrl: string
    category: string; // e.g., "Lipstick", "Foundation", etc.
}

/
 * Formats the price for display in a user-friendly way.
 * 
 * @param price - The price of the cosmetic product.
 * @returns Formatted price string with currency symbol.
 */
export function formatPrice(price: number): string {
    return $${price.toFixed(2)}
}

/
 * Utility function to conditionally apply class names.
 * 
 * @param base - Base class name.
 * @param modifiers - Additional class names based on conditions.
 * @returns Combined class name string.
 */
export function cn(base: string, ...modifiers: (string | boolean)[]): string {
    return [base, ...modifiers.filter(Boolean)].join(' ')
}

/
 * Returns the style for a glamorous button used in GlamCS.
 * 
 * @returns CSSProperties object for the button.
 */
export function glamorousButtonStyle(): CSSProperties {
    return {
        backgroundColor: COLORS.primary,
        color: COLORS.secondary,
        padding: '15px 30px',
        borderRadius: '25px',
        border: 'none',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'transform 0.2s',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
    }
}

/
 * Applies a hover effect for buttons to enhance user interaction and engagement.
 * 
 * @param isHovered - Flag indicating whether the button is hovered.
 * @returns CSSProperties object for the button hover effect.
 */
export function buttonHoverEffect(isHovered: boolean): CSSProperties {
    return {
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        transition: 'transform 0.2s'
    }
}

/
 * Formats a description for a cosmetic product to enhance customer engagement.
 * 
 * @param description - Original product description.
 * @returns Styled description string ready for display.
 */
export function formatProductDescription(description: string): string {
    return ${description.charAt(0).toUpperCase()}${description.slice(1)}
}