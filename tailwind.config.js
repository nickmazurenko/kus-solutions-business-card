/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        coiny: ['Coiny', 'cursive'],
        dongle: ['Dongle', 'sans-serif']
      },
      colors: {
        background: '#000000',
        primary: '#8063A6', // #7032c2
        secondary: '#ffffff'
      },
      boxShadow: {
        button: '-5px 5px 0px 2px'
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
