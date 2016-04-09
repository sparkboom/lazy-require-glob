import gulp from 'gulp';
import notify from 'gulp-notify';
import {defaults} from 'lodash';
import process from 'process';
import chalk from 'chalk';

let defaultConfig = {
    subtitle: 'Success',
    sound: 'Pop',
    onLast: true
}

let initialTaskName = process.argv[2];
let showNotifications = process.env.GULP_SHOW_NOTIFICATIONS==='true';

export default config => done => {

    if (initialTaskName!==config.taskName){
        done();
        return;
    }
    if (!showNotifications){
        console.log(chalk.white('Notifications: You`re notifications are turned off. To turn them on, please use export GULP_SHOW_NOTIFICATIONS=true'));
        done();
        return;
    }else{

        console.log(chalk.gray('Notifications: Notifications are being shown as you have set the environment variable GULP_SHOW_NOTIFICATIONS=true'));
    }

    return gulp.src('./')
        .pipe( notify( defaults( {}, config, defaultConfig, {
            title: config.taskName,
            message: `${config.taskName} completed.`
        })
    ));
};
