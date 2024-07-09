module.exports = {
  content: ["./templates/**/*.html"],
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["retro"]
  }
};
