import _ from 'lodash';
import gulp from 'gulp';
import concatJsStep from '../steps/concat-js.step';
import notifyStep from '../steps/notify.step';
import concatJsDefaultConf from '../config/concat-js/concat-js.default.conf';
import concatJsDevConf from '../config/concat-js/concat-js.dev.conf';
import concatJsProdConf from '../config/concat-js/concat-js.prod.conf';

let devConf = _.merge({}, concatJsDefaultConf, concatJsDevConf);
gulp.task('concatJs:dev', gulp.series(
    concatJsStep( devConf ),
    notifyStep( { taskName: 'concatJs:dev' } )
) );


let prodConf = _.merge({}, concatJsDefaultConf, concatJsProdConf);
gulp.task('concatJs:prod', gulp.series(
    concatJsStep( prodConf ),
    notifyStep( { taskName: 'concatJs:prod' } )
) );
