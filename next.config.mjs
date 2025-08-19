import { defineConfig } from 'next/config'
export default defineConfig({
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Update with your image CDN or hosting domain
  },
  optimizeFonts: true,
  experimental: {
    optimizeCss: true
},
  env: {
    BRAND_NAME: 'GlamCS',
    PRIMARY_COLOR: '#FFA500', // Orange
    SECONDARY_COLOR: '#FFFFFF', // White
  }
});