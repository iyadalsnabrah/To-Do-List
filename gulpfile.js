const gulp=require("gulp");
const browserSync = require('browser-sync').create();
const sass=require("gulp-sass");


gulp.task("sass",function(){
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("src/css"));
});

gulp.task('js', function() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js'])
        .pipe(gulp.dest("src/js"))
        .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./src"  
    });

    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
    gulp.watch("src/js/*.js").on('change', browserSync.reload);
    gulp.watch("src/scss/*.scss").on('change', browserSync.reload);
});


gulp.task('fonts', function() {
    return gulp.src('node_modules/@fortawesome/fontawesome-free/webfonts/*')
      .pipe(gulp.dest('src/webfonts'))
  })

  gulp.task('fa', function() {
    return gulp.src('node_modules/@fortawesome/fontawesome-free/css/all.min.css')
      .pipe(gulp.dest('src/css'))
  })  
  gulp.task('default', ['js','serve', 'fa', 'fonts']);