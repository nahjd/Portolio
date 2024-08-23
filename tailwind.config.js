/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "bounce-up-down": {
          "0%, 100%": { transform: "translateY(-20%)" },
          "50%": { transform: "translateY(20%)" },
        },
      },
      animation: {
        "bounce-up-down": "bounce-up-down 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
