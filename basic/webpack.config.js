const HtmlWebpackPlugin = require('html-webpack-plugin')

// npm提供一个npm_lifecycle_event的变量，返回当前正在执行的脚本名称
const TARGET = process.env.npm_lifecycle_event;
const plugins = [
  new HtmlWebpackPlugin()
]
if (TARGET == "build:report") {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  plugins.push(new BundleAnalyzerPlugin({
    analyzerMode: 'server',       // 默认值：server，共有server，static，json，disabled四种模式
    analyzerHost: '127.0.0.1',    // 默认值：127.0.0.1，在server模式下使用的主机启动HTTP服务器。
    analyzerPort: 8888,           // 默认值：8888，在server模式下使用的端口号
    reportFilename: "report.html", // 默认值：report.html，在static模式下生成的捆绑报告文件的路径名
    openAnalyzer: true,            // 默认值：true，是否在默认浏览器中自动打开报告
  }))
}

module.exports = {
  mode: 'development',
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  plugins,
};
