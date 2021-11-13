module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          300: "#DFEEEA",
          400: "#768883",
          500: "#5E8B7E",
          800: "#092532",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
