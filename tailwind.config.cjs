
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#f8fafc",
        "muted-foreground": "#94a3b8",
        muted: "rgba(255, 255, 255, 0.06)",
        border: "rgba(255, 255, 255, 0.1)",
        primary: "#a855f7",
        accent: "#6366f1",
        "primary-foreground": "#ffffff",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Outfit", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
};
