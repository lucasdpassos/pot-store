/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Lato: ["Lato", "sans-serif"],
    }},
    colors: {
      'primary':"#505165",
      'secondary':"#a23e60"
    },
  },
  plugins: [],
}
