var webpack = require('webpack');
var path = require('path');

var SRC_DIR = path.join(__dirname, 'src');

module.exports = {
  devtool: 'eval',
  entry: ['./src/app.tsx'],
  module: {
    loaders: [{
      test: /\.tsx?$/,
      loader: 'awesome-typescript-loader',
      include: SRC_DIR
    }]
  },
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'build'),
    publicPath: '/static/'
  },
  plugins: [
  ],
  resolve: {
    root: [SRC_DIR],
    extensions: ['', '.jsx', '.js', '.tsx', '.ts'],
    fallback: path.join(__dirname, 'node_modules')
  }
};
