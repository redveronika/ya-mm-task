const webpack = require('webpack');
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const config = {
    entry: {
        app: './app/index.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, '../app'),
                loader: [{
                    loader: 'webpack-bem-loader',
                    options: {
                        techs: ['js', 'css'],
                    },
                },
                'babel-loader',
                ],
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
                        outputPath: 'assets/imgs/',
                    },
                }],
            },
        ],
    },
    plugins: [
        new HtmlPlugin({
            filename: 'index.html',
            template: './app/index.html',
        }),
        new CleanWebpackPlugin(['../dist'], { allowExternal: true }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        }),
        new FaviconsWebpackPlugin({
            logo: './app/assets/imgs/yandex-logo.png',
            title: 'Yandex task app',
            icons: {
                yandex: true,
            },
        }),
    ],
    output: {
        path: path.resolve(__dirname, '../dist'),
    },
};

module.exports = { config };
