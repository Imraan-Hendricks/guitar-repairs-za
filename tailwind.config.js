/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        'noto-sans': ['var(--font-noto-sans)', ...fontFamily.sans],
      },
      keyframes: {
        'fade-in-left': {
          '0%': { opacity: 0, transform: 'translateX(-100vw)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        'fade-in-right': {
          '0%': { opacity: 0, transform: 'translateX(100vw)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        'fade-out-left': {
          '0%': { opacity: 1, transform: 'translateX(0)' },
          '100%': { opacity: 0, transform: 'translateX(-100vw)' },
        },
        'fade-out-right': {
          '0%': { opacity: 1, transform: 'translateX(0)' },
          '100%': { opacity: 0, transform: 'translateX(100vw)' },
        },
      },
      animation: {
        'fade-in-left': 'fade-in-left 500ms ease-in-out forwards',
        'fade-in-right': 'fade-in-right 500ms ease-in-out forwards',
        'fade-out-left': 'fade-out-left 500ms ease-in-out forwards',
        'fade-out-right': 'fade-out-right 500ms ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
