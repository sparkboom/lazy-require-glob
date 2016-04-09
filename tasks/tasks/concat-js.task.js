import gulp from 'gulp';
import concatJsStep from '../steps/concat-js.step';
import notifyStep from '../steps/notify.step';
import concatJsConf from '../config/concat-js/concat-js.default.conf';

gulp.task('concatJs', gulp.series(
    concatJsStep( concatJsConf.webpackConf ),
    notifyStep( { taskName: 'concatJs' } )
) );
