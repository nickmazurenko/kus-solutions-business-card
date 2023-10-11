import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      fontFamily: {
        coiny: ['var(--font-coiny)'],
        dongle: ['var(--font-dongle)']
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
  plugins: [require('flowbite/plugin')]
};
export default config;
