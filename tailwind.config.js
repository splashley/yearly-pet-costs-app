module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      glacier: {
        light: "#C1D9E1",
        DEFAULT: "#78AEBF",
        dark: "#406B79",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
