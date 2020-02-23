let mix = require("laravel-mix");

mix
  .js("src/js/app.js", "dist/script.js")
  .sass("src/scss/app.scss", "dist/style.css")
  .options({
    autoprefixer: {
      options: {
        browsers: ["last 6 versions"]
      }
    }
  });
