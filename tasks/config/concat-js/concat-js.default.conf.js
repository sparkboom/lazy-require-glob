import {paths, appName} from '../gulp.conf';
import {resolve} from 'path';

export default {
    webpackConf: {
        entry: `${paths.src}/${appName}.js`,
        output: {
            path: resolve(`${paths.dist}/`),
            filename: `${appName}.js`
        },
        colors: true,
        progress: true,
        module: {
            loaders: [{
                test: /\.js/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                    cacheDirectory: true
                }
            }]
        },
        devtool: 'source-map',
        plugins: []
    }
};
