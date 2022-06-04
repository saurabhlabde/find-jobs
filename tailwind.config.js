const defaultValue = require("tailwindcss");

module.exports = {
  content: [
    "./src/pages/**/*.tsx",
    "./src/layouts/**/*.tsx",
    "./src/components/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        ...defaultValue.colors,
        primary: "#000000",
        secondary: "#171616",
        primary_color: "#FFFFFF",
        secondary_color: "#E9DADA",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
