const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const { config } = require('./shared.config');

module.exports = merge(config, {
    entry: {
        app: './app/index.js',
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
