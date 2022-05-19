module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        customDark: {
          darkGray: '#1f1f1f',
          lightGray: '#eeeeee',
        },
        customLight: {
          darkGray: '#1f1f1f',
          lightGray: '#eeeeee',
        },
      },
    },
  },
  plugins: [],
}
