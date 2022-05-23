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
      keyframes: {
        swish: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(1.5rem)' },
        },
      },
      animation: {
        swisher: 'swish 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
