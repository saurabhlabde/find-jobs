const defaultValue = require("tailwindcss");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      ...defaultValue.colors,
      primary: "#000000",
      secondary: "#0a0a0a",
      primary_color: "#ffffff",
      secondary_color: "#fbf9f9",
    },
  },
  plugins: [],
};
