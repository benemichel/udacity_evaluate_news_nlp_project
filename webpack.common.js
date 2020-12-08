const HtmlWebPackPlugin = require("html-webpack-plugin")

const common = {
        entry: './src/client/index.js',
        module: {
            rules: [
                {
                    test: '/\.js$/',
                    exclude: /node_modules/,
                    loader: "babel-loader"
                },
            ],
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: "./src/client/views/index.html",
                filename: "./index.html",
            }),
        ],

        output: {
            libraryTarget: 'var',
            library: 'Client'
        },
};

exports.commonConfig = common;