const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: './',
    assetModuleFilename: 'images/[name][ext][query]',
  },
  watch: true,
  plugins: [
    new HtmlWebpackPlugin({
      tamplate: './src/index.html',
    }),
  ],
  module: {
    rules: [
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(?:ico|gid|png|jpg|jpeg)$/i, type: 'asset/resource' },
    ],
  },
};
