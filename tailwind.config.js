/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        primary: "#001f99",
        secondary: "#0d40ff",
        grey: {
          100: "#808080",
          200: "#bfbfbf",
          300: "#e6e6e6"
        }
      }
    },
  },
  plugins: [],
}

