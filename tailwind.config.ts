import type { Config } from 'tailwindcss'
import s from './src/assets/img.png'
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',

        'car-image-bg': 'url(../assets/img.png)',
        'shadow-bg': 'url(../assets/Rectangle 15.png)',
      },
      fontFamily: {
        TTSmalls: ['TT Smalls', 'sans-serif'],
      },
      colors: {
        'main-gray': '#292930',
        'secondary-gray': '#303038',
        'main-border': 'rgba(245,245,245,0.08)',
        accent: '#6764F1',
        dim: '#6B6B7B',
      },
      boxShadow: {
        'main-glow': '0px -3px 5px rgba(66, 153, 225, 0.1)',
      },
    },
  },
  plugins: [],
}
export default config
