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
          800: '#2d0a42',
          900: '#150321',
        },
        cyan: {
          300: '#e879f9',
          400: '#d946ef',
          500: '#c026d3',
        },
        teal: {
          400: '#a855f7',
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
        'grad-cyan': 'linear-gradient(90deg, #d946ef 0%, #a855f7 100%)', // Magenta to Purple
        'grad-hero': 'linear-gradient(135deg, #150321 0%, #2d0a42 50%, #4c116a 100%)', // Deep background gradient
        'grad-card': 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 100%)',
      },
      boxShadow: {
        glow: '0 0 30px -5px rgba(217, 70, 239, 0.4)', // Magenta glow
        card: '0 8px 32px rgba(0, 0, 0, 0.4)',
      }
    },
  },
  plugins: [],
}
