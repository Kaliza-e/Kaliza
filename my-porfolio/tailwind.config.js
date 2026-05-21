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
        midnight: {
          800: '#1a081b', // Deep plum panel
          900: '#0b0310', // Soft midnight background
        },
        rose: {
          300: '#ff9ee6', // Bubblegum pink
          400: '#ff4db8', // Neon rose primary
          500: '#d53ab0', // Rich magenta
        },
        lilac: {
          400: '#8a5c93', // Muted lavender
          500: '#4c2f64', // Deep purple
          600: '#2e163f', 
        },
        cream: {
          100: '#fff1fb', // Pale blush
          200: '#ffd4f0', // Soft pink glow
          300: '#f3d9ef', // Warm rose mist
        },
        glass: {
          bg: 'rgba(20, 5, 24, 0.45)',
          border: 'rgba(255, 77, 184, 0.12)',
        }
      },
      fontFamily: {
        display: ['"Cinzel Decorative"', '"Cinzel"', '"Clash Display"', 'sans-serif'],
        creative: ['"Syne"', 'sans-serif'],
        body: ['"Syne"', 'sans-serif'],
        cinzel: ['"Cinzel"', 'serif'],
      },
      backgroundImage: {
        'grad-viby': 'linear-gradient(135deg, #ff4db8 0%, #ffd4f0 100%)',
        'grad-cyan': 'linear-gradient(90deg, #ff4db8 0%, #4c2f64 100%)',
        'grad-hero': 'radial-gradient(circle at 50% 50%, #1a081b 0%, #0b0310 100%)',
        'grad-card': 'linear-gradient(180deg, rgba(255,77,184,0.08) 0%, rgba(11,3,16,0) 100%)',
      },
      boxShadow: {
        glow: '0 0 30px -5px rgba(255, 77, 184, 0.35)',
        neon: '0 0 35px -5px rgba(255, 77, 184, 0.55)',
        card: '0 12px 40px rgba(0, 0, 0, 0.7)',
      }
    },
  },
  plugins: [],
}

