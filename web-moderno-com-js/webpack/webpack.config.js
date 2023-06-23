const modoDev = process.env.NODE_ENV !== 'production';

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: "./src/principal.js",
    output: {
        filename: "principal.js",
        path: __dirname + "/public",
        assetModuleFilename: 'images/[name][ext]'
    },
    devServer: {
        static: './public',
        port: 9000
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
                parallel: true,
            }),
            new CssMinimizerPlugin({
                minimizerOptions: {
                    preset: ['default', {
                        discardComments: { removeAll: true },
                    }],
                },
                parallel: true,
            }),
        ],
    },
    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                type: "asset/resource"
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css",
        }),
    ],
};