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
          800: '#1e0f33',
          900: '#0a0514',
        },
        cyan: {
          300: '#d8b4fe', // Actually purple now, keeping name for compatibility
          400: '#c084fc',
          500: '#a855f7',
        },
        teal: {
          400: '#e879f9', // Actually fuchsia now
        },
        glass: {
          bg: 'rgba(255, 255, 255, 0.04)',
          border: 'rgba(0, 212, 255, 0.18)',
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'grad-cyan': 'linear-gradient(135deg, #c084fc 0%, #e879f9 100%)',
        'grad-hero': 'radial-gradient(circle at 50% 50%, rgba(192, 132, 252, 0.1) 0%, rgba(10, 5, 20, 1) 100%)',
        'grad-card': 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)',
      },
      boxShadow: {
        glow: '0 0 30px -5px rgba(192, 132, 252, 0.4)',
        card: '0 8px 32px rgba(0, 0, 0, 0.4)',
      }
    },
  },
  plugins: [],
}
