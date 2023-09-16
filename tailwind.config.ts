import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      '2xl': {'max': '1400px'},

      'xl': {'max': '1080px'},

      'lg': {'max': '1023px'},

      'md': {'max': '767px'},

      'sm': {'max': '639px'},  
      },
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
        },
        barUp: {
          '0%': { opacity: ".3" },
          '50%': { opacity: "1" },
          '100%': { opacity: ".3" }
        },
      },
      animation: {
        textShow: 'textShow .5s ease',
        buttonShow: 'buttonShow 2s ease',
        imageUp: 'imageUp .5s ease',
        imageDown: 'imageDown .5s ease',
        barUp: 'barUp .5s ease',
      },
    },
  },
  plugins: [],
}
export default config
