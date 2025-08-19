import { Brand } from './Brand'
import { Product } from './Product'
import { User } from './User'
/
 * Types and Interfaces for GlamCS Cosmetics Application
 * This file contains the TypeScript types and interfaces specific to the GlamCS brand,
 * ensuring type safety and clarity in our cosmetics application.
 */

// Brand details specific to GlamCS
export interface GlamCSBrand extends Brand {
    name: 'GlamCS'
    primaryColor: '#FFA500'; // Orange
    secondaryColor: '#FFFFFF'; // White
    slogan: string
}

// Product details specific to cosmetics
export interface GlamCSProduct extends Product {
    id: string
    name: string
    description: string
    price: number
    ingredients: string[]
    category: string; // e.g., lipstick, foundation
    isAvailable: boolean
    images: string[]; // URLs for product images
}

/
 * User interface definition for GlamCS customers.
 * This interface captures user-specific details needed for a personalized shopping experience.
 */
export interface GlamCSUser extends User {
    id: string
    username: string
    email: string
    password: string
    isPremiumMember: boolean; // true if user has a premium membership
}

/
 * Represents the overall application state related to GlamCS cosmetics products.
 */
export interface GlamCSApplicationState {
    products: GlamCSProduct[]
    currentUser: GlamCSUser | null; // Current logged-in user, if any
    cart: GlamCSProduct[]; // Products currently in the user's shopping cart
}

// Example brand instance for GlamCS
export const glamCSBrand: GlamCSBrand = {
    name: 'GlamCS',
    primaryColor: '#FFA500',
    secondaryColor: '#FFFFFF',
    slogan: 'Unleash Your Inner Glamour!'
};