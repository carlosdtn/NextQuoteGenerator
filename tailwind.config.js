module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './skeleton/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dm-black': '#191919',
        'dm-blue': '#2D4263',
        'dm-orange': '#C84B31',
        'dm-yellow': '#ECDBBA',
        'dm-skeleton': '#202020',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
