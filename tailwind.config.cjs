module.exports = {
  // Only scan project HTML and your src JS to avoid scanning node_modules
  content: ["./*.html", "./src/**/*.{js,html}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
