const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { title } = require('process');

module.exports = {
  mode: 'development',
  entry: {
     main: path.resolve(__dirname, 'solution/index.js')
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  //loaders
  module: {
    rules: [
      {test : /\.css$/, use: ['style-loader', 'css-loader']}
    ]
  },
  //plugins
  plugins:[new HtmlWebPackPlugin({
      title: 'tasks manager',
      filename: 'index.bundle.html',
      template: path.resolve(__dirname, 'solution/index.html')
    })
  ],
};
