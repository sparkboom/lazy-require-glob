import gulp from 'gulp';
import eslintStep from '../steps/eslint.step';
import notifyStep from '../steps/notify.step';
import eslintConf from '../config/eslint/eslint.default.conf';

gulp.task('eslint', gulp.series(
    eslintStep(eslintConf),
    notifyStep({ taskName:'eslint' })
) );
