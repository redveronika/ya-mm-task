const path = require('path');
const HtmlPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './app',
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist')
    },
    devtool: 'source-map',
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
        })
    ]
};