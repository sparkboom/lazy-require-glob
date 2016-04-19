import {appName} from '../gulp.conf';
import webpack from 'webpack';

export default {
    webpackConf: {
        output: {
            filename: `${appName}.min.js`
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            })
        ]
    }
};
