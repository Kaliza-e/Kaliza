/** @type {import('tailwindcss').Config} */
// Force reload for Viby theme
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          800: '#0c0f0c', // Dark obsidian panel
          900: '#030503', // Obsidian black-green background
        },
        leaf: {
          300: '#adff2f', // Electric lime
          400: '#88ff00', // Electric neon green primary
          500: '#6ce000', // Darker neon green
        },
        olive: {
          400: '#233d23', // Muted dark olive
          500: '#142b14', // Deep green-black
          600: '#081708', 
        },
        cream: {
          100: '#ffffff', // Stark white
          200: '#88ff00', // Neon green accent
          300: '#a0a5a0', // Concrete grunge gray
        },
        glass: {
          bg: 'rgba(0, 0, 0, 0.4)',
          border: 'rgba(136, 255, 0, 0.1)',
        }
      },
      fontFamily: {
        display: ['"Cinzel Decorative"', '"Cinzel"', '"Clash Display"', 'sans-serif'],
        creative: ['"Syne"', 'sans-serif'],
        body: ['"Syne"', 'sans-serif'],
        cinzel: ['"Cinzel"', 'serif'],
      },
      backgroundImage: {
        'grad-viby': 'linear-gradient(135deg, #88ff00 0%, #ffffff 100%)',
        'grad-cyan': 'linear-gradient(90deg, #88ff00 0%, #142b14 100%)',
        'grad-hero': 'radial-gradient(circle at 50% 50%, #0c0f0c 0%, #030503 100%)',
        'grad-card': 'linear-gradient(180deg, rgba(136,255,0,0.02) 0%, rgba(0,0,0,0) 100%)',
      },
      boxShadow: {
        glow: '0 0 30px -5px rgba(136, 255, 0, 0.4)',
        neon: '0 0 35px -5px rgba(136, 255, 0, 0.6)',
        card: '0 12px 40px rgba(0, 0, 0, 0.7)',
      }
    },
  },
  plugins: [],
}
