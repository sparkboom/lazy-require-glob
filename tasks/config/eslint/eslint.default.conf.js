import {paths, appName} from '../gulp.conf';
import eslintConf from '../../../src/.eslintrc.json';

export default {
    src: `${paths.src}/${appName}.js`,
    eslintConf
};
