/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        85: "85%",
        65: "65%",
      },
    },
  },
  plugins: [],

  safelist: [{ pattern: /^(.*?)/ }],
};
