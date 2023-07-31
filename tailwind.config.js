/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        'noto-sans': ['var(--font-noto-sans)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
