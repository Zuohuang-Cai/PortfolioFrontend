const { heroui } = require("@heroui/theme");

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: { table: { max: "940px" } },
    extend: {
      backgroundImage: {
        "indexBG": "url('/bgImage.jpg')"
      }
    }
  },
  darkMode: "class",
  plugins: [heroui()]
};
