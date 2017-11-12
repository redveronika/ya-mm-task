const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const { config } = require('./shared.config');

module.exports = merge(config, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        historyApiFallback: true,
        stats: 'errors-only',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ],
    output: {
        filename: '[name].bundle.js',
    },
});
