var webpack = require('webpack');
var path = require('path');

var SRC_DIR = path.join(__dirname, 'src');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './src/app.tsx'], // Your appʼs entry point'
  module: {
    loaders: [{
      test: /\.tsx?$/,
      loaders: ['react-hot', 'awesome-typescript-loader'],
      include: SRC_DIR,
    }]
  },
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'build'),
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    root: [SRC_DIR],
    extensions: ['', '.jsx', '.js', '.tsx', '.ts']
  }
};
