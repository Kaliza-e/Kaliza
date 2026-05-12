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
          800: '#064e3b',
          900: '#022c22',
        },
        cyan: {
          300: '#fde047',
          400: '#fbbf24',
          500: '#f59e0b',
        },
        teal: {
          400: '#fcd34d',
        },
        glass: {
          bg: 'rgba(255, 255, 255, 0.04)',
          border: 'rgba(251, 191, 36, 0.18)',
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'grad-cyan': 'linear-gradient(90deg, #fbbf24 0%, #f59e0b 100%)',
        'grad-hero': 'linear-gradient(135deg, #022c22 0%, #064e3b 50%, #065f46 100%)',
        'grad-card': 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 100%)',
      },
      boxShadow: {
        glow: '0 0 30px -5px rgba(251, 191, 36, 0.4)', // Magenta glow
        card: '0 8px 32px rgba(0, 0, 0, 0.4)',
      }
    },
  },
  plugins: [],
}
