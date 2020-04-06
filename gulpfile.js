const gulp = require('gulp');
const include = require('gulp-file-include');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const fs = require('fs');


/* CONCATENATE JS FILES */
gulp.task('scripts', () => {
    return gulp.src('./src/pages/**/scripts/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./dist/'))
});


/* HTML INTO HTML */
gulp.task('include', () => {
    return gulp.src(['src/pages/**/*.html', '!src/pages/**/templates/*'])
    .pipe( include({prefix: '@@', basepath: '@file', }) )
    .pipe( gulp.dest('./dist') )
});


/* SASS */
gulp.task('sass', () => {
    return gulp.src(['./src/shared/styles/*.scss','./src/pages/**/styles/*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./dist'))
});



/* BASIC DIRECTORY STRUCTURE */
gulp.task('structure', () => {
   
    // get directories
    const pagesPath = './src/pages/';
    let pagesContent = fs.readdirSync(pagesPath);

    console.log()
    
    // operate on each dir
    pagesContent.forEach( (elt) => {
        
        let currentDirUrl = `${pagesPath}${elt}`;
        let currentDirContent = fs.readdirSync(currentDirUrl);

        if(currentDirContent.length === 0 ) {
            const prefix = `./src/pages/${elt}`;
            console.log(prefix);
           
            return gulp.src(['./empty/'], {allowEmpty: true})
                .pipe(gulp.dest(`${prefix}/scripts`))
                .pipe(gulp.dest(`${prefix}/templates`))
                .pipe(gulp.dest(`${prefix}/styles`));
            // ./
        }
        
    });   
});