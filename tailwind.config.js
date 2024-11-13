/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'card-gradient': 'linear-gradient(135deg, #fff 0%, #f3e8ff 100%)',
        'button-gradient': 'linear-gradient(135deg, #9333ea 0%, #db2777 100%)',
        'hover-gradient': 'linear-gradient(135deg, #7e22ce 0%, #be185d 100%)',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(147, 51, 234, 0.3)',
      },
    },
  },
  plugins: [],
}