const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  exclude: /node_modules/,
  plugins : [
    new HtmlWebpackPlugin(),
  ],
};
