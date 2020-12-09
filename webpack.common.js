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

        ],

        output: {
            libraryTarget: 'var',
            library: 'Client'
        },
};

exports.commonConfig = common;