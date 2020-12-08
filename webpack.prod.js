const {merge} = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const commonConfig = require('./webpack.common');

module.exports =
    merge(commonConfig.commonConfig,
        {
            mode: 'production',
            module: {
                rules: [
                    {
                        test: /\.scss$/,
                        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
                    }
                ]
            },
            plugins : [
                new MiniCssExtractPlugin({ filename: "[name].css" }),
            ],
            optimization: {
                minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
            },
        }
    )

