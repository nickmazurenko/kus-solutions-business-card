import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
        blblur: '-5px 5px 10px 2px',
        tl: '-2px -2px 0px 2px',
        repeat: '-20px 20px 0px 2px, -40px 40px 0px 2px'
      }
    }
  },
  plugins: [require('flowbite/plugin')]
};
export default config;
