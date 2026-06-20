
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#F7F1DE",
        "surface-secondary": "#B0BA99",
        "accent-bronze": "#9D6638",
        "dark-brown": "#4E220F",
      },
      fontFamily: {
        // Using Google Font 'Inter' as a modern, readable typeface.
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
};
