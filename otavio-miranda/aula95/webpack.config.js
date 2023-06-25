const modoDev = process.env.NODE_ENV === 'development'

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: modoDev ? 'development' : 'production',
  devtool: modoDev ? "nosources-source-map" : 'source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build', 'assets', 'js'),
    publicPath: '/assets/js/',
    filename: 'bundle.js',
    assetModuleFilename: 'images/[name][ext]'
  },
  devServer: {
    static: path.resolve(__dirname, 'build'),
    port: 9000,
    hot: true,
    open: true,
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
      new CssMinimizerPlugin({ // Minifica CSS
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
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/i,
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
      filename: '../css/[name].css',
      chunkFilename: '../css/[id].css',
    }),
  ],
}