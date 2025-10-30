import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'alsace-red': '#E11D48',
        'alsace-blue': '#0055A4',
      },
    },
  },
  plugins: [],
}
export default config