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
          800: '#242b23',
          900: '#1B211A', // Base
        },
        leaf: {
          300: '#a5c485',
          400: '#8BAE66', // Primary
          500: '#759654',
        },
        olive: {
          400: '#7a9b55',
          500: '#628141', // Secondary
          600: '#4d6632',
        },
        cream: {
          100: '#f7edd7',
          200: '#EBD5AB', // Accent
          300: '#d9c296',
        },
        glass: {
          bg: 'rgba(255, 255, 255, 0.02)',
          border: 'rgba(255, 255, 255, 0.05)',
        }
      },
      fontFamily: {
        display: ['"Clash Display"', 'sans-serif'],
        creative: ['"Syne"', 'sans-serif'],
        body: ['"Syne"', 'sans-serif'],
      },
      backgroundImage: {
        'grad-viby': 'linear-gradient(135deg, #8BAE66 0%, #EBD5AB 100%)',
        'grad-cyan': 'linear-gradient(90deg, #8BAE66 0%, #628141 100%)',
        'grad-hero': 'radial-gradient(circle at 50% 50%, #242b23 0%, #1B211A 100%)',
        'grad-card': 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)',
      },
      boxShadow: {
        glow: '0 0 30px -5px rgba(139, 174, 102, 0.3)',
        neon: '0 0 30px -5px rgba(235, 213, 171, 0.3)',
        card: '0 8px 32px rgba(0, 0, 0, 0.4)',
      }
    },
  },
  plugins: [],
}
