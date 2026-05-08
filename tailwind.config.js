/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        teal: { DEFAULT: '#00BCA4', dark: '#009E8A', light: '#E0FAF6' },
        amber: { DEFAULT: '#F59E0B', light: '#FEF3C7' },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
