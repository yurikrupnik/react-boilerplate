const path = require('path');
const nodeExternals = require('webpack-node-externals');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const NodemonPlugin = require('nodemon-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const json = require('./package');

const filename = 'server.js';

module.exports = (env) => {
    // console.log('env', env);
    // console.log('argv', argv);
    // console.log('process.env.NODE_ENV', process.env.NODE_ENV);
    const isProd = !!env.prod;
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
                    use: ['babel-loader', 'eslint-loader'],
                },
                {
                    test: /\.(css|scss)$/,
                    use: [
                        'css-loader', 'sass-loader'
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
            new Dotenv(),
            new GenerateJsonPlugin('package.json', Object.assign({}, json, {
                main: filename,
                scripts: {
                    start: `node ${filename}`
                },
                devDependencies: {}
            })),
            process.argv.includes('--watch') ? new NodemonPlugin({
                script: path.resolve(__dirname, 'dist', filename),
                watch: path.resolve(__dirname, 'dist', filename),
                verbose: true
            }) : () => {}
        ]
    };
};
