import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'ab-cream': '#FDFAF5',
        'ab-beige': '#F7F2EA',
        'ab-tortora': '#5C544F',
        'ab-tortora-dark': '#3E342E',
        'ab-gold': '#C9A84C',
        'ab-social': '#b5a881',

      },
      fontFamily: {
        'serif': ['"Cormorant Garamond"', 'serif'],
        //'sans': ['Jost', 'sans-serif'],
        'sans': ['"Montserrat"', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;