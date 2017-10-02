const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const PORT = 4400;

module.exports = {
    entry: [
        'react-hot-loader/patch',
        `webpack-dev-server/client?http://localhost:${PORT}`,
        'webpack/hot/only-dev-server',
        './app/index.js',
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: `http://localhost:${PORT}/`
    },
    devtool: 'inline-source-map',
    devServer: {
        host: 'localhost',
        port: PORT,
        hot: true,
        historyApiFallback: true,
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
            template: 'app/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};
