// Plugins
const typography = require("@tailwindcss/typography");
const forms = require("@tailwindcss/forms");
const lineClamp = require("@tailwindcss/line-clamp");
const aspect = require("@tailwindcss/aspect-ratio");

/** @type { import('tailwindcss/types/config').PluginCreator } */
const child = ({ addVariant }) => {
  addVariant("child", "& > *");
  addVariant("child-hover", "& > *:hover");
  addVariant("child-focus", "& > *:focus");
  addVariant("child-first", "& > *:first-child");
  addVariant("child-last", "& > *:last-child");
};

/**
 * Tailwind configuration file
 *
 * @type {import('tailwindcss').Config}
 */
const config = {
  content: [
    "./[Aa]pp.{ts,vue}",
    "./pages/**/*.{ts,vue}",
    "./layouts/**/*.{ts,vue}",
    "./components/**/*.{ts,vue}",
    "./composables/**/*.{ts,vue}",
    "./modals/**/*.{ts,vue}",
    "./sliders/**/*.{ts,vue}",
  ],

  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          md: "1rem",
          lg: "1rem",
          xl: "1rem",
        },

        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1232px",
        },
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1232px",

        "-sm": { max: "640px" },
        "-md": { max: "768px" },
        "-lg": { max: "1024px" },
        "-xl": { max: "1232px" },
      },
      colors: {
        red: {
          DEFAULT: "#E2231A",
        },
        black: {
          DEFAULT: "#151515",
          10: "#DEDEDE",
        },
      },
      fontSize: {
        base: ["1rem", "1.1875rem"],
        "5xl": ["2.8125rem", "3.4375rem"],
        lg: ["1.125rem", "1.5625rem"],
      },
      borderRadius: {
        md: "5px",
        "4xl": "30px",
        "5xl": "50px",
      },
    },
  },

  plugins: [aspect, typography, forms, lineClamp, child],
};

module.exports = config;
