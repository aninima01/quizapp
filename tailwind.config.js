/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards",
      },
      backgroundImage: {
        "radial-custom":
          "radial-gradient(circle at 85.4% 50.8%, rgb(14, 72, 222) 0%, rgb(3, 22, 65) 74.2%)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
