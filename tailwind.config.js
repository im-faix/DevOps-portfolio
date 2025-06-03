// tailwind.config.js
module.exports = {
  content: [
    // If your pages/components live under src/:
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",

    // If you ever create any UI library files elsewhere, add those globs too
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
