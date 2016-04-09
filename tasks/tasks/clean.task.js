import gulp from 'gulp';
import cleanStep from '../steps/clean.step';
import notifyStep from '../steps/notify.step';
import concatJsConf from '../config/concat-js/concat-js.default.conf';

gulp.task('clean', gulp.series(
    cleanStep({dist: concatJsConf.webpackConf.entry}),
    notifyStep({ taskName: 'clean' })
) );
