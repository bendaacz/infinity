/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "32px",
      xl: "180px",
      "2xl": "179px",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    extend: {},
    margin: {
      4: "34px",
    },
    spacing: {
      41: "41px",
      37: "37px",
      222: "222px",
      334: "334px",
    },
    fontFamily: {
      light: "Unbounded-300",
      header: "Unbounded-500",
      normal: "Unbounded-Regular",
      inter: "Inter",
    },
  },
  plugins: [],
};
