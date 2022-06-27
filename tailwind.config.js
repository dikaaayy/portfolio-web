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
          '0%': { opacity: 0, transform: 'translateX(200%)' },
          '100%': { opacity: 1, transform: 'translateY(0%)' },
        },
        spins: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        bounced: {
          '0%, 100%': { transform: 'translateY(30%)' },
          '50%': { transform: 'translateY(0)' },
        },
        fade: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(-15px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        swisher: 'swish 0.5s ease-in-out forwards',
        spinner: 'spins 15s linear infinite',
        bouncy: 'bounced 1.5s linear infinite',
        fader: 'fade 0.15s ease-in-out',
        fadein: 'fadeIn 0.3s ease-in-out',
      },
      fontFamily: {
        sanFrancisco: 'sanFrancisco',
      },
    },
  },
  plugins: [],
}
