const gulp = require('gulp');
const include = require('gulp-file-include');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const fs = require('fs');


/* CONCATENATE JS FILES */
const scripts =  () => {
   
   const pagesPath = './src/pages/';
   let pagesContent = fs.readdirSync(pagesPath);

    pagesContent.forEach((elt) => {
        let currentSource = `${pagesPath}${elt}/scripts/*.js`;
        gulp.src(currentSource)
        .pipe(concat(`${elt}.js`))
        .pipe(gulp.dest(`./dist/${elt}`))
       
    });
    return true;
}
gulp.task('scripts', scripts);


/* HTML INTO HTML */
const htmlInclude = () => {
    return gulp.src(['src/pages/**/*.html', '!src/pages/**/templates/*'])
    .pipe( include({prefix: '@@', basepath: '@file', }) )
    .pipe( gulp.dest('./dist') )
}
gulp.task('include', htmlInclude);


/* SASS */
const sassing = () => {
    return gulp.src(['./src/shared/styles/*.scss','./src/pages/**/styles/*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./dist'))
}
gulp.task('sass', sassing);


/* IMAGES */
const images = () => {
    gulp.src('./img/*')
    .pipe(gulp.dest('./dist/img'))
}
gulp.task('images', images)


/* BASIC DIRECTORY STRUCTURE */
const structuring = () => {
   
    const pagesPath = './src/pages/';
    let pagesContent = fs.readdirSync(pagesPath);
    
    pagesContent.forEach( (elt) => {
        
        let currentDirUrl = `${pagesPath}${elt}`;
        let currentDirContent = fs.readdirSync(currentDirUrl);

        if(currentDirContent.length === 0 ) {
            const prefix = `./src/pages/${elt}`;
            fs.closeSync(fs.openSync(prefix + '/' + elt +'.html', 'a'))
            return gulp.src(['./empty/'], {allowEmpty: true})
                .pipe(gulp.dest(`${prefix}/scripts`))
                .pipe(gulp.dest(`${prefix}/templates`))
                .pipe(gulp.dest(`${prefix}/styles`));
        }
        
    });   
}
gulp.task('structure', structuring);



const all = () => {
    scripts();
    sassing();
    htmlInclude();
}
gulp.task('build', all);