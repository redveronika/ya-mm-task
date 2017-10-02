const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: [
        './app/index.js'
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 4400,
        hot: true,
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new HtmlPlugin({
            template: './app/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};
