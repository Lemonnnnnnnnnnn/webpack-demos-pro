const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',  // 模式
  entry: './main.js', // 入口文件
  output: {
    // path: path.resolve(__dirname, 'dist'),  // 如果要修改输出文件夹，修改path路径
    filename: 'bundle.js' // 出口文件,默认在dist文件夹下
  },
  plugins : [
    new HtmlWebpackPlugin(),
  ],
};
