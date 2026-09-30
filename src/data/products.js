export const categories = ['All', 'Phones & Audio', 'Computing', 'Accessories', 'Home']

export const products = [
  { id: 1, art: 'mobile', name: 'Mobile', category: 'Phones & Audio', price: 24999, rating: 4.5, reviews: 1284,
    description: '6.5" AMOLED display, 50MP camera and all-day battery.', tint: '#DCE6FF' },
  { id: 2, art: 'headphones', name: 'Headphones', category: 'Phones & Audio', price: 3499, rating: 4.3, reviews: 962,
    description: 'Wireless over-ear sound with noise cancelling and 30h playback.', tint: '#FFE3D6' },
  { id: 3, art: 'computer', name: 'Computer', category: 'Computing', price: 59999, rating: 4.7, reviews: 431,
    description: '15.6" laptop with 16GB RAM and a fast 512GB SSD.', tint: '#D9F2E6' },
  { id: 4, art: 'charger', name: 'Charger', category: 'Accessories', price: 1299, rating: 4.2, reviews: 2210,
    description: '45W fast USB-C charger, compact and travel friendly.', tint: '#FFF0C2' },
  { id: 5, art: 'coffee', name: 'Coffee Maker', category: 'Home', price: 4999, rating: 4.4, reviews: 587,
    description: 'Brew up to 6 cups with a programmable timer and keep-warm plate.', tint: '#EADFF7' },
]

export const formatPrice = (n) => '₹' + n.toLocaleString('en-IN')
