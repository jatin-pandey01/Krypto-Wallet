/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    extend: {
      screens: {
        mf: "990px",
      },
      keyframes: {
        "slide-in": {
          "100%": {
            // "-webkit-transform": "translateX(120%)",
            transform: "translateX(1%)",
          },
          "0%": {
            // "-webkit-transform": "translateX(120%)",
            transform: "translateX(-2%)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 0.3s ease-out",
      },
    },
  },
  plugins: [],
}

