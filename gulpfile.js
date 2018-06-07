const babel = require("gulp-babel");
const gulp = require("gulp");
const concat = require("gulp-concat");
const watch = require("gulp-watch");

const chemins = {
  sources: "./src/",
  distrib: "./distrib/",
  demo: "./docs/demo/modules/clipboard-interaction/distrib/"
};



gulp.task("clipboard-interaction.min.js", () => {
  return gulp.src([
      "src/**.js"
    ])
    .pipe(concat("clipboard-interaction.min.js"))
    .pipe(babel({
      presets: ["es2015"],
      compact: true,
      comments: false,
      minified: true
    }))
    .pipe(gulp.dest(chemins.distrib))
});

gulp.task("release", () => {
  return gulp.src([
      "src/**.js"
    ])
    .pipe(concat("clipboard-interaction.min.js"))
    .pipe(babel({
      presets: ["es2015"],
      compact: true,
      comments: false,
      minified: true
    }))
    .pipe(gulp.dest(chemins.distrib))
});

gulp.task("demo", () => {
  return gulp.src([
      "src/**.js"
    ])
    .pipe(concat("clipboard-interaction.min.js"))
    .pipe(babel({
      presets: ["es2015"],
      compact: false,
      comments: false,
      minified: false
    }))
    .pipe(gulp.dest(chemins.demo))
});

gulp.task("watch:clipboard-interaction.min.js", function() {
  watch("./src/**.js", function() {
    gulp.run("clipboard-interaction.min.js");
  });
});





gulp.task("default", ["clipboard-interaction.min.js", "demo"]);


gulp.task("all", ["default"]);

gulp.task("watch", ["watch:clipboard-interaction.min.js"]);