/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
      fontSize: {
        'custom': '1.50rem', // Custom font size of 1.50rem
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        'loading-keys-app': {
          '0%, 80%, 100%': { opacity: '0.75', boxShadow: '0 0 #00712D', height: '20px' },
          '40%': { opacity: '1', boxShadow: '0 -8px #00712D', height: '30px' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'loading-keys': 'loading-keys-app 0.8s cubic-bezier(0.5, 0.2, 0.3, 1) infinite',
      },
      backgroundImage: {
        "hero-bg": "url('/src/assets/images/hero-bg.jpg')",
        "contest-hero-bg": "url('/src/assets/images/contest-hero-bg.png')",
        "contest-card-bg":
          "linear-gradient(140deg, rgb(0, 241, 111), rgb(0, 95, 43))",
        "contest-card-header-bg":
          "linear-gradient(150deg, rgb(255, 243, 158) 0%, rgb(248, 224, 62) 100%)",
          'gradient-80': 'linear-gradient(to top, #FCDE70 60%, transparent 60%)',
          'gradient-50': 'linear-gradient(to top, #E8B86D 50%, transparent 50%)',
          'gradient-green': 'linear-gradient(to top, rgb(0, 241, 111) 50%, transparent 50%)',
          'gradient-top' : 'linear-gradient(to bottom, rgb(0, 0 ,0) 20%, transparent 20%)',
      },
      colors: {
        "green-primary": "#01AB41",
        "green-light": "#D5ED9F",
        "green-darker": "#16423C",
        "yellow-primary": "#f2c800",
        "yellow-light": "#FCDE70",
        "green-dark" : "#00712D",
        "orange-dark" : "#FF9100",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "1px 0px 1px #000000",
        lg: "0 8px 16px var(--tw-shadow-color)",
        'sm': '1px 1px 2px rgba(0, 0, 0, 0.5)',
        'md': '2px 2px 4px rgba(0, 0, 0, 1)',
        'lg': '3px 3px 6px rgba(0, 0, 0, 0.5)',
      },
      backgroundPosition: {
        'right-offset': 'calc(100% + 25px) center',
        'right-offset-80': 'calc(100% + 80px) center'
      },
      transform: {
        'flip-x': 'scaleX(-1)',
        'flip-y': 'scaleY(-1)',
      },
      maxWidth: {
        '8xl': '90rem',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/line-clamp'),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
