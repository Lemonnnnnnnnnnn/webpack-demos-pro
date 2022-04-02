module.exports = {
  mode : 'development',
  entry: './main.jsx',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // 编译对象
        exclude: /node_modules/, // 排除对象
        use: {
          loader: 'babel-loader', // 依赖包：babel-loader
          options: {
            presets: ['es2015', 'react'] // 依赖包：  babel-preset-es2015 and babel-preset-react ， 功能： 编译es6和react
          }
        }
      }
    ]
  },
  devServer: {
    static: './dist', // 从什么位置查找文件
  },
};
