const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'build'),
  },
  watch: true,
  //   module: {
  //     rules: [
  //       { test: /\.css$/, use: 'css-loader' },
  //       { test: /\.js$/, use: 'babel-loader' },
  //     ],
  //   },
};
