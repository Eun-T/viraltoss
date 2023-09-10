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
        buttonShow: {
          '0%': { transform: "translateY(0)" },
          '20%': { transform: "translateY(-10px)" },
          '40%': { transform: "translateY(0)" },
          '70%': { transform: "translateY(-20px)"},
          '100%': { transform: "translateY(0)" }
        },
        imageUp: {
          '0%': { transform: "translateY(0px)" },
          '100%': { transform: "translateY(-20px)" }
        },
        imageDown: {
          '0%': { transform: "translateY(-20px)" },
          '100%': { transform: "translateY(0px)" }
        }
      },
      animation: {
        textShow: 'textShow .5s ease',
        buttonShow: 'buttonShow 2s ease',
        imageUp: 'imageUp .5s ease',
        imageDown: 'imageDown .5s ease'
      },
    },
  },
  plugins: [],
}
export default config
