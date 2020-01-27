const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
    entry: {
        bundle: [
            './src/index.ts'
        ]
    },

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].js',
        publicPath: 'public/'
    },

    watch: true,

    resolve: {
        extensions: ['.ts', '.tsx', '.js','.jsx']
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /(node_modules|public)/,
                use: ['ts-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2|png|jpg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]?[hash]'
                }
            }
        ]
    },

    plugins: [
        new CopyWebpackPlugin([
            { from: path.join(__dirname, 'src', 'images') }
        ]),
    ],
};

module.exports = (env, options) => {
    let prod = options.mode === 'production';

    config.devtool = prod ? false : 'eval-sourcemap';

    return config;
};
