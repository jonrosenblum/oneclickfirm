/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans'],
      },
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255, 255, 255, 0.18)",
      },

      gradientColorStops: {
        s: "#2CB3A5",
        s1:"#13A990",
        s2:"#3F83E6",
        s3:"#3F83E6"

    },
    backgroundColor:{
      hov:"#5EB9CC"
    }

  },
  plugins: [],
}
}