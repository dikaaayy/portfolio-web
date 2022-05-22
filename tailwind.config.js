module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        sunYellow: '#ffd600',
        customDark: {
          darkGray: '#1f1f1f',
          lightGray: '#e3e3e3',
        },
        customLight: {
          darkGray: '#3D330A',
          lightGray: '#FBF7E7',
        },
      },
    },
  },
  plugins: [],
}
