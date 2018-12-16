const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    entry: './demo/boot.js',
    output: {
        filename: "bundle.js",
    },
    devServer: {
        compress: false,
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(eot|ttf|woff|woff2|svg)$/,
                use: 'file-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'demo/index.html', to: 'index.html' }
        ], {
            copyUnmodified: true 
        }),
        new webpack.ProvidePlugin({
            'window.jQuery': 'jquery',
            '$': 'jquery'
        })
    ],
    watch: true
}