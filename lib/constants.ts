export const BRAND_NAME = "GlamCS"
export const COLORS = {
    PRIMARY: "#FFA500", // Orange
    SECONDARY: "#FFFFFF" // White
}
export const FONTS = {
    HEADER: "'Arial Black', Gadget, sans-serif",
    BODY: "'Helvetica Neue', Helvetica, sans-serif"
}
// Product Categories
export const PRODUCT_CATEGORIES = [
    "Skincare",
    "Makeup",
    "Fragrance",
    "Body Care",
    "Hair Care"
]
// Configuration for the GlamCS application
export const CONFIG = {
    BASE_URL: "https://www.glamcs.com",
    API_ENDPOINT: "https://api.glamcs.com/v1",
    CONTACT_EMAIL: "info@glamcs.com",
    SUPPORT_PHONE: "+1 (800) 555-0199",
    SOCIAL_MEDIA: {
        INSTAGRAM: "https://www.instagram.com/glamcs",
        FACEBOOK: "https://www.facebook.com/glamcs",
        TWITTER: "https://twitter.com/glamcs"
    }
}
// Types for GlamCS
export interface Product {
    id: string
    name: string
    category: string
    price: number
    description: string
    imageUrl: string
    stock: number
}

export interface User {
    id: string
    name: string
    email: string
    phoneNumber?: string
}

// Business Logic: Example function to get products by category
export const getProductsByCategory = (products: Product[], category: string): Product[] => {
    return products.filter(product => product.category === category)
}
/
 * This file defines constants and configurations for the GlamCS application
 * in the cosmetics industry, promoting an elegant and luxurious online presence.
 */