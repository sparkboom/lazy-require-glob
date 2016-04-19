import gulp from 'gulp';
import webpack from 'gulp-webpack';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import chalk from 'chalk';
import process from 'process';

export default ({webpackConf}) => cb => {

    console.log(chalk.yellow(`Concatenating JS files ${webpackConf.entry} to ${webpackConf.output.path}`));

    var onError = err => {
        notify.onError({
                    title:    "Gulp Error",
                    subtitle: "ConcatJS Step Failed",
                    message:  "Error: <%= error.message %>",
                    sound:    "Beep"
                })(err);

        process.exit();
    };

    return gulp.src(webpackConf.entry)
        .pipe(plumber({errorHandler: onError}))
        .pipe(webpack(webpackConf))
        .pipe(gulp.dest(`${webpackConf.output.path}`));
};
