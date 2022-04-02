const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode : 'development',
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  devServer: {
    static: './dist', // 从什么位置查找文件
  },
};
