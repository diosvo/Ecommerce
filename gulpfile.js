const { src, dest, parallel, series, watch } = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const babel = require('gulp-babel');
const del = require('del');


const sassTask = function () {
    return src('src/sass/*.scss')
        .pipe(sass().on("error", sass.logError))
        .pipe(dest('dist/css'));
}

const pugTask = function() {
    return src('src/view/pages/*.pug')
    .pipe(pug({
        pretty:true
    }))
    .pipe(dest('dist/html'));
}

const jsTask = function() {
    return src('src/js/*.js')
    .pipe(babel(
        {
            presets: ['@babel/env']
        }
    ))
    .pipe(dest('dist/js'));
}

const clean = function() {
    return del('dist/css/style.css');
}


// Lắng nghe sự thay đổi => tự chạy lại
const watchTask = function() {
    watch(['src/sass/*.scss',
    'src/view/pages/*.pug',
    'src/js/*.js'],
    parallel(sassTask, pugTask, jsTask))
}

// Trình tự chạy
exports.clean = clean;
exports.default = series(
    clean,
    parallel(sassTask, pugTask, jsTask),
    watchTask
);
