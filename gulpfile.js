const {src, dest, watch} = require("gulp"),
      browserSync = require("browser-sync").create(),
      sass = require("gulp-sass"),
      autoprefixer = require('gulp-autoprefixer');


 function bs() {
   serveSass();
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  watch("./*.html").on("change", browserSync.reload);
  watch("./sass/**/*.sass" , serveSass);
  watch("./js/*.js").on("change", browserSync.reload);
};

function serveSass() {
  return src("./sass/**/*.sass")
      .pipe(sass())
      .pipe(autoprefixer({
        cascade: false
    }))
      .pipe(dest("./css"))
      .pipe(browserSync.stream());
};

exports.serve = bs;
