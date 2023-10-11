/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'white': 'var(--white)',
        'blue-primary': 'var(--blue-primary)',
        'blue-secondary': 'var(--blue-secondary)',
        'grey-tertiary': 'var(--grey-tertiary)',
        'grey-primary': 'var(--grey-primary)',
        'grey-secondary': 'var(--grey-secondary)',
        'success': 'var(--success)',
        'danger': 'var(--danger)',
      },
      fontFamily: {
        'serif': 'var(--font-family)'
      }
    }
  },
  plugins: [],
};
