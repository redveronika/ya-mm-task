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
    module: {
        loaders: [
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
});
