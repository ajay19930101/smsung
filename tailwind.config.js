/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        samsung: ['samsung', 'sans-serif'],
        samsung400: ['samsung-400', 'sans-serif'],
        samsung700: ['samsung-700', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
