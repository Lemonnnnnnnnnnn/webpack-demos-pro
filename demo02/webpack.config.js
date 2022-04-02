const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode : 'development',
  entry: {
    bundle1: './main1.js',
    bundle2: './main2.js'
  },
  output: {
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  devServer: {
    static: './dist', // 从什么位置查找文件
  },
};
