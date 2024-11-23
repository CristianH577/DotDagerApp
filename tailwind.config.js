const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "360px",
      },
      colors: {
        custom: {
          DEFAULT: "#bba9c4",
          dark: "#836491",
        },
        "custom-text": {
          DEFAULT: "#442b4f",
          dark: "#bba9c4",
        },
        // custom: "#bba9c4",
        // "custom-text": "#442b4f",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      // themes: {
      //   light: {
      //     custom: "#bba9c4",
      //     "custom-text": "#442b4f",
      //   },
      //   dark: {
      //     colors: {
      //       custom: "#836491",
      //       "custom-text": "#bba9c4",
      //     },
      //   },
      // },
    }),
  ],
};
