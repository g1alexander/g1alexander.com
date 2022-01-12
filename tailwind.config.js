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
        white: {
          300: "#f8f8f8",
          400: "#fafafa",
          500: "#f2f2f2",
          600: "#A0A0A0",
          700: "#818181",
          800: "#797979",
        },
        black: {
          300: "#030303",
        },
        blue: {
          500: "#0333FF",
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
