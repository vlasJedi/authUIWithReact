const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ],
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  devtool: "#source-map"
};