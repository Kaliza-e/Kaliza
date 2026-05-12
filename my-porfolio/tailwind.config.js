/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#020b1a',
          800: '#030f26',
          700: '#051630',
          600: '#0a1f42',
        },
        cyan: {
          400: '#00d4ff',
          500: '#00bcd4',
          300: '#67eaff',
        },
        teal: {
          400: '#00ffcc',
          300: '#72ffe8',
        },
        glass: {
          bg: 'rgba(255, 255, 255, 0.04)',
          border: 'rgba(0, 212, 255, 0.18)',
        }
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'grad-cyan': 'linear-gradient(135deg, #00d4ff 0%, #00ffcc 100%)',
        'grad-hero': 'linear-gradient(160deg, #020b1a 0%, #051e46 60%, #073a5e 100%)',
        'grad-card': 'linear-gradient(135deg, rgba(0,212,255,0.08) 0%, rgba(0,255,204,0.04) 100%)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(0, 212, 255, 0.2)',
        card: '0 8px 32px rgba(0, 0, 0, 0.4)',
      }
    },
  },
  plugins: [],
}
