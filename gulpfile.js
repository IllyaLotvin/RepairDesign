const {src, dest, watch} = require("gulp"),
      browserSync = require("browser-sync").create(),
      sass = require("gulp-sass"),
      autoprefixer = require('gulp-autoprefixer');


 function bs() {
   serveSass();
  browserSync.init({
    proxy: "http://lotvinillya.biz.ua/index.html"
  });
  watch("./*.html").on("change", browserSync.reload);
  watch("./sass/**/*.sass" , serveSass);
  watch("./sass/**/*.scss" , serveSass);
  watch("./js/*.js").on("change", browserSync.reload);
  //watch("./**/*.php").on("change", browserSync.reload);

};

function serveSass() {
  return src("./sass/**/*.sass", "./sass/**/*.scss" )
      .pipe(sass())
      .pipe(autoprefixer({
        cascade: false
    }))
      .pipe(dest("./css"))
      .pipe(browserSync.stream());
};

exports.serve = bs;
