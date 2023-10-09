/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        primary: '#8063A6',
        secondary: '#ffffff'
      }
    }
  },
  // eslint-disable-next-line no-undef
  plugins: [require('flowbite/plugin')]
};

/**
 * --background: #000000;
 *	--primary: #8063A6;
 *	--secondary: #ffffff;
 */
