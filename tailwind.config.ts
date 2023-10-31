import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        'xl': '12px',
      }
    },
    colors: {
      'bg': '#000017',
      'white': '#cadbdf',
      'border': '#3f3b50'
    }
  },
  plugins: [],
}
export default config
