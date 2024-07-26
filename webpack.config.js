// webpack.config.js
const path = require('path');

module.exports = {
  mode: 'production', // 生产模式
  entry: './index.js', // 你的源文件路径
  output: {
    path: path.resolve(__dirname, 'dist'), // 输出路径
    filename: 'prettyLog.js', // 输出文件名
    library: 'prettyLog', // 暴露的全局变量名
    libraryTarget: 'umd', // 采用UMD作为输出格式
    globalObject: 'this', // 用于UMD的全局this的引用
    clean: true, // 清理/dist文件夹
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  externals: {
    // 如果你的包依赖于其他npm包，你可以在这里声明它们作为外部依赖
  },
  devtool: 'source-map',
};