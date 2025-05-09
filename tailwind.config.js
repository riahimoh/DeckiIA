/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#2C3E50',
        secondary: '#27AE60',
        accent: '#E67E22',
        background: '#F9F9F9',
        neutral: '#F0F0F0',
      },
      spacing: {
        '128': '32rem',
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};