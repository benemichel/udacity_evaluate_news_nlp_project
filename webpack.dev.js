const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common');
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports =
    merge(commonConfig.commonConfig,
    {
        mode: 'development',
        devtool: 'source-map',
        stats: 'verbose',
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: ['style-loader', 'css-loader', 'sass-loader']
                }
            ]
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: "./src/client/views/index.html",
                filename: "./index.html",
            }),

            new CleanWebpackPlugin({
                // Simulate the removal of files
                dry: true,
                // Write Logs to Console
                verbose: true,
                // Automatically remove all unused webpack assets on rebuild
                cleanStaleWebpackAssets: true,
                protectWebpackAssets: false
            })
        ],
    }
)
