const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const projectFolder = 'ya-mm-task';

module.exports = {
    entry: {
        app: './app/index.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, '../app'),
                loader: 'babel-loader',
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    'css-loader',
                    'postcss-loader',
                ],
            },
            {
                test: /\.(woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/fonts/',
                        },
                    },
                ],
            },
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
        new UglifyJSPlugin(),
        new HtmlPlugin({
            filename: 'index.html',
            template: './app/index.html',
        }),
        new CleanWebpackPlugin(['../dist']),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
    },
};
