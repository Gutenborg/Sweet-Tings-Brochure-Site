/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkmode: false,
  plugins: [],
  theme: {
    screens: {
      xs: '340px',
      sm: '540px',
      md: '720px',
      lg: '940px',
      xl: '1140px'
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
