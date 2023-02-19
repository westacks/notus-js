const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./**/*.html", "./*.html"],
  plugins: [
    require("@tailwindcss/forms"),
  ],
};
