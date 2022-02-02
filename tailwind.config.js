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
        social: {
          linkedin: "#0A66C2",
          github: "#181717",
          instagram: "#E4405F",
          twitter: "#1DA1F2",
        },
        tech: {
          vue: "#4FC08D",
          react: "#61DAFB",
        },
        dark: {
          blue: "#1B7FFF",
          100: "#E6E4E1",
          200: "#989082",
          300: "#9C9386",
          400: "#ACA59A",

          500: "#1C1E20",
          600: "#181A1A",
          700: "#1C1D1E",
          800: "#1F2223",
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
