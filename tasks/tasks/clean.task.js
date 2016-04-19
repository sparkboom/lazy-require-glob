import gulp from 'gulp';
import path from 'path';
import cleanStep from '../steps/clean.step';
import notifyStep from '../steps/notify.step';
import concatJsConf from '../config/concat-js/concat-js.default.conf';

gulp.task('clean', gulp.series(
    cleanStep({dist: path.resolve(concatJsConf.webpackConf.output.path + concatJsConf.webpackConf.output.filename) }  ),
    notifyStep({ taskName: 'clean' })
) );
