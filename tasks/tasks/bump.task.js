import gulp from 'gulp';
import bumpStep from '../steps/bump.step';
import notifyStep from '../steps/notify.step';

let createConfig = bumpType => ({
    package : './package.json',
    bump : {
        type : bumpType /* type: major | minor | patch */
        /*version: 'x.x.x'*/
    }
});

gulp.task('bump:patch', gulp.series(
    bumpStep( createConfig('patch') ),
    notifyStep( { taskName: 'bump:patch' } )
) );

gulp.task('bump:minor', gulp.series(
    bumpStep( createConfig('minor') ),
    notifyStep( { taskName: 'bump:minor' } )
) );

gulp.task('bump:major', gulp.series(
    bumpStep( createConfig('major') ),
    notifyStep( { taskName: 'bump:major' } )
) );
