import gulp from 'gulp';
import notifyStep from '../steps/notify.step';

require('./concat-js.task');
require('./clean.task');

gulp.task('build',
    gulp.series(
        'clean',
        'concatJs',
        notifyStep({ taskName:'build' })
    )
);
