import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        
      },
      keyframes: {
        textShow: {
          '0%': { backgroundColor: "transparent" },
          '100%': { backgroundColor: "#4e5968" }
        },
      },
      animation: {
        textShow: 'textShow .5s ease',
      },
    },
  },
  plugins: [],
}
export default config
