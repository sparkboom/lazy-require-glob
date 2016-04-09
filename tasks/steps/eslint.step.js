import gulp from 'gulp';
import eslint from 'gulp-eslint';
import chalk from 'chalk';

export default config => () => {

    console.log(chalk.yellow(`Linting ${config.src}`));

    return gulp.src(config.src)
        .pipe( eslint(config.eslintConf) )
        .pipe( eslint.format() )
        .pipe( eslint.failAfterError()  )
};
