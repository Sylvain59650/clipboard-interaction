const babel = require("gulp-babel");
const gulp = require("gulp");
const concat = require("gulp-concat");
const watch = require("gulp-watch");

const chemins = {
  sources: "./src/",
  distrib: "./distrib/",
  demo: "./docs/node_modules/clipboardjs/"
};



gulp.task("clipboardjs.min.js", () => {
  return gulp.src([
      "src/**.js"
    ])
    .pipe(concat("clipboardjs.min.js"))
    .pipe(babel({
      presets: ["es2015"],
      compact: false,
      comments: false,
      minified: false
    }))
    .pipe(gulp.dest(chemins.distrib))
});

gulp.task("release", () => {
  return gulp.src([
      "src/**.js"
    ])
    .pipe(concat("clipboardjs.min.js"))
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
    .pipe(concat("clipboardjs.min.js"))
    .pipe(babel({
      presets: ["es2015"],
      compact: false,
      comments: false,
      minified: false
    }))
    .pipe(gulp.dest(chemins.demo))
});

gulp.task("watch:clipboardjs.min.js", function() {
  watch("./src/**.js", function() {
    gulp.run("clipboardjs.min.js");
  });
});





gulp.task("default", ["clipboardjs.min.js", "demo", "watch"]);


gulp.task("all", ["default"]);

gulp.task("watch", ["watch:clipboardjs.min.js"]);