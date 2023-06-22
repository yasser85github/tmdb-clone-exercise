/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tmdbDarkBlue: "rgb(3, 37, 65)",
        tmdbLightGreen: "rgb(30, 213, 169)",
        tmdbLightBlue: "rgb(1, 180, 228)",
      },
      backgroundImage: {
        banner:
          'linear-gradient(to right, rgba(3, 37, 65, 0.8) 0%, rgba(3, 37, 65, 0) 100%), url("https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/hPea3Qy5Gd6z4kJLUruBbwAH8Rm.jpg")',
      },
    },
  },
  plugins: [],
};
