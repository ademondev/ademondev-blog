/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'not-quite-black': '#252525',
        'logo-blue': '#3b5c99',
      },
      backgroundImage: {
        'repeat': "url('/svg/repeat.svg')",
      },
      keyframes: {
        wave: {
          '0%': { transform: 'translateX(0%)' },
          '100%': {transform: 'translateX(-50%)'},
        },
      },
      animation: {
        wave: 'wave linear 7s infinite',
        wave2: 'wave linear 8s infinite',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}