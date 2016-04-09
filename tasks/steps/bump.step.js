import gulp from 'gulp';
import bump from 'gulp-bump';

export default config => () => {

    return gulp.src(config.package)
        .pipe(bump(config.bump))
        .pipe(gulp.dest('./'));
};
