const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');
const NodemonPlugin = require('nodemon-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const json = require('./package');
const sassVars = require('./src/theme.js');
const sassFuncs = require('./sassHelper');

const filename = 'server.js';

module.exports = (env, argv) => {
    const isProd = env ? !!env.prod : false;
    const isDebug = env ? !!env.debug : false;
    return {
        context: path.resolve(__dirname, 'src'),
        resolve: {
            extensions: ['.json', '.js', '.jsx', '.css', '.scss']
        },
        target: 'node', // in order to ignore built-in modules like path, fs, etc.
        node: {
            __dirname: false,
            __filename: true,
        },
        externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
        devtool: 'source-map',
        entry: './server.jsx',
        output: {
            path: path.resolve(__dirname, 'dist'),
            chunkFilename: '[name].js',
            filename
        },
        mode: isProd ? 'production' : 'development',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: ['babel-loader'],
                },
                {
                    test: /\.(css|scss)$/,
                    use: [
                        'css-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                functions: sassFuncs(sassVars)
                            }
                        }
                    ]
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {}
                        }
                    ]
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                // 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
                'process.env.DEBUG': JSON.stringify(isDebug)
            }),
            isProd ? new Dotenv() : () => {},
            isProd ? new GenerateJsonPlugin('package.json', Object.assign({}, json, {
                main: filename,
                scripts: {
                    start: `node ${filename}`
                },
                devDependencies: {}
            })) : () => {},
            argv.watch ? new NodemonPlugin({
                script: path.resolve(__dirname, 'dist', filename),
                watch: path.resolve(__dirname, 'dist', filename),
                verbose: true
            }) : () => {}
        ],
    };
};
