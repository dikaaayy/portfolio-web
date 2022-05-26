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
          darkGray: '#3e3923',
          lightGray: '#FBF7E7',
          cream: '#e6dfbd',
        },
      },
      keyframes: {
        swish: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(85%)' },
        },
        spins: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        swisher: 'swish 2s ease-in-out infinite forwards',
        spinner: 'spins 15s linear infinite',
      },
      fontFamily: {
        sanFrancisco: 'sanFrancisco',
      },
    },
  },
  plugins: [],
}
