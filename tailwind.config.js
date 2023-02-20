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
          xs: "576px",
          sm: "768px",
          md: "992px",
          lg: "1200px",
          xl: "1392px",
        },
      },
      screens: {
        xs: "576px",
        sm: "768px",
        md: "992px",
        lg: "1200px",
        xl: "1392px",

        "-xs": { max: "575px" },
        "-sm": { max: "767px" },
        "-md": { max: "991px" },
        "-lg": { max: "1199px" },
        "-xl": { max: "1391px" },
      },

      // fontSize: {},
      borderRadius: {
        "4xl": "30px",
        "5xl": "50px",
      },
    },
  },

  plugins: [aspect, typography, forms, lineClamp, child],
};

module.exports = config;
