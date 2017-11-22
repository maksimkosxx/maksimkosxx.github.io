var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglifyjs'),
    cssnano     = require('gulp-cssnano'),
    rename      = require('gulp-rename'),
    del         = require('del'),
    cache       = require('gulp-cache'),
    autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function(){
    return gulp.src('app/sass/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer(['last 2 versions'], { cascade: true }))
        .pipe(cssnano())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('css-libs', ['sass'], function() {
    return gulp.src('app/css/libs.css')
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/css'));
});

gulp.task('scripts', function() {
    return gulp.src([
        'app/libs/jquery.min.js',
        'app/libs/jquery.validate.min.js',
        'app/libs/lightbox.min.js'
    ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'));
});


gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});


gulp.task('watch', ['browser-sync', 'sass', 'css-libs', 'scripts'], function() {
    gulp.watch('app/sass/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);

});

gulp.task('clean', function() {
    return del.sync('dist');
});


gulp.task('build', ['clean', 'sass', 'scripts'], function() {

    var buildCss = gulp.src([
        'app/css/main.css',
        'app/css/lightbox.css'
    ])
        .pipe(gulp.dest('/dist/css'));

    var buildFonts = gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));

    var buildImg = gulp.src('app/images/**/*')
        .pipe(gulp.dest('dist/images'));

    var buildJs = gulp.src('app/js/**/*')
        .pipe(gulp.dest('dist/js'));

    var buildHtml = gulp.src('app/*.html')
        .pipe(gulp.dest('dist'));

});

gulp.task('clear', function () {
    return cache.clearAll();
});

gulp.task('default', ['watch']);