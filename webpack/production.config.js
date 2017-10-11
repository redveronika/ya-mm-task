const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const { config } = require('./shared.config');

const projectFolder = 'ya-mm-task';

module.exports = merge(config, {
    entry: {
        app: './app/index.js',
    },
    module: {
        loaders: [
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: '/assets/imgs/',
                        // костыль, конечно, что-то я не знаю пока, как правильно сделать
                        publicPath: `/${projectFolder}`,
                    },
                }],
            },
        ],
    },
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true,
            beautify: true,
        }),
        new HtmlPlugin({
            filename: '404.html',
            template: './app/404.html',
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
    },
});
