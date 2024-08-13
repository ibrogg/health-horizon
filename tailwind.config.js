/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hoverColor: "#FFA07A",
        brightColor: "#FF7F50",
        backgroundColor: "#0047ab",
      },
    },
  },
  plugins: [],
};
