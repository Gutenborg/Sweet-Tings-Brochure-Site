/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkmode: false,
  plugins: [],
  theme: {
    screens: {
      xs: '340',
      sm: '540',
      md: '720',
      lg: '940',
      xl: '1140'
    },
    extend: {
      colors: {
        brand: '#e46486'
      }
    }
  },
  variants: {
    extend: {}
  }
};
