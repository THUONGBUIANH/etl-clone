/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        etl: "#1a192b",
        etlHover: "#4c497e",
        etlBlock: "#333154",
        etlBorder: "rgb(51, 49, 84)",
        node: "#222138",
        nodeHandle: "rgb(64, 63, 105)",
        nodeHandleHover: "rgb(104, 102, 172)",
      },
    },
  },
  plugins: [],
  important: true,
};
