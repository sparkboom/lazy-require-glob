import {paths, appName} from '../gulp.conf';
import {resolve} from 'path';

export default {
    webpackConf: {
        entry: `${paths.src}/${appName}.js`,
        output: {
            path: resolve(`${paths.dist}/`),
            filename: `${appName}.js`
        },
        externals :{
            'glob' : 'glob',
            'lodash' : '_',
            'underscore.string' : '_str',
            'path':'path',
            'callsite': 'callsite'
        },
        colors: true,
        progress: true,
        module: {
            exprContextRegExp: /$^/,
            exprContextCritical: false,

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
        plugins: []
    }
};
