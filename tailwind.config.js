/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./client/src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-grey-1": "#2e3440",
        "dark-grey-2": "#434c5e",
        primary: "#5d81aa",
        "primary-light": "#81a1c0",
        "primary-dark": "#466486",
        white1: "#f3f4f6",
        white2: "#dcdfe5",
        white3: "#c4c9d4",
        white4: "#acb4c3",
        white5: "#959eb2",
        white6: "#7d89a1",
        white7: "#67748e",
        white8: "#566176",
        green: "#a3be8c",
        red: "#bf616a",
      },
    },
  },
  plugins: [],
};
