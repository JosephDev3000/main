module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '400px',
      // => @media (min-width: 400px) { ... }
      'md': '1024px',
      // => @media (min-width: 1024px) { ... }
      'lg': '1280px',
      // => @media (min-width: 1280px) { ... }
    }
  },
  
  plugins: [],
}