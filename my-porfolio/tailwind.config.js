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
        navy: {
          800: '#0a0a1a', // Deep indigo
          900: '#050505', // True black
        },
        cyan: {
          300: '#b3f8ff',
          400: '#00f2ff', // Electric Cyan
          500: '#00d0db',
        },
        fuchsia: {
          400: '#ff61f2',
          500: '#ff00e5', // Neon Fuchsia
          600: '#db00c5',
        },
        glass: {
          bg: 'rgba(255, 255, 255, 0.03)',
          border: 'rgba(255, 255, 255, 0.1)',
        }
      },
      fontFamily: {
        display: ['"Clash Display"', 'sans-serif'],
        creative: ['"Syne"', 'sans-serif'],
        body: ['"Syne"', 'sans-serif'],
      },
      backgroundImage: {
        'grad-viby': 'linear-gradient(135deg, #00f2ff 0%, #ff00e5 100%)',
        'grad-cyan': 'linear-gradient(90deg, #00f2ff 0%, #ff00e5 100%)',
        'grad-hero': 'radial-gradient(circle at 50% 50%, #1a1a2e 0%, #050505 100%)',
        'grad-card': 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)',
      },
      boxShadow: {
        glow: '0 0 30px -5px rgba(0, 242, 255, 0.5)',
        neon: '0 0 30px -5px rgba(255, 0, 229, 0.5)',
        card: '0 8px 32px rgba(0, 0, 0, 0.8)',
      }
    },
  },
  plugins: [],
}
