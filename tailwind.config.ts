import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        fitgreen: '#D7FB04',
        fitblack: '#000000',
        fitdark: '#0a0a0a',
        fitcard: '#111111',
        fitborder: '#1a1a1a',
        fitgray: '#E6E6E6',
        fitmid: '#888888',
      },
      fontFamily: {
        heading: ['var(--font-montserrat)', 'sans-serif'],
        body: ['var(--font-opensans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
