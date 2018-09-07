const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    
    //target: 'node',
    node: {
        console: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
      },
    entry: ['babel-polyfill', './src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            minify: true
        }),


    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
              vendor: {
                chunks: "initial",
                test: path.resolve(process.cwd(), "node_modules"),
                name: "vendor",
                enforce: true
              }
            }
          },
          minimizer: [
            new UglifyJsPlugin({
              uglifyOptions: {
                sourceMap: true,
                compress: {
                  drop_console: true,
                  conditionals: true,
                  unused: true,
                  comparisons: true,
                  dead_code: true,
                  if_return: true,
                  join_vars: true,
                  warnings: false
                },
                output: {
                  comments: false
                }
              }
            })
          ]
    }
}