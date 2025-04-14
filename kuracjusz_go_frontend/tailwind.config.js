/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ['var(--font-main)'],
        title: ['var(--font-title)'],
        second:['var(--font-second)']
      },colors:{
        olive:['var(--olive)'],
        dark_green:['var(--dark_green)'],
        beige:['var(--beige)'],
        light_orange:['var(--light_orange)'],
        dark_oragne:['var(--dark_oragne)'],
      }
    },
  },
  plugins: [],
};
