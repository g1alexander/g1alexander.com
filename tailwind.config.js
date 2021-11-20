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
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      mds: "769px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
