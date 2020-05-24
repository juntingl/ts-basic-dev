const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 开启 transpileOnly 后，使用 fork-ts-checker-webpack-plugin 进行类型检查
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.ts',
  },
  /**
   * 构建后输出规则
  */
  output: {
     path: path.join(__dirname, '../', 'dist'), // 输出路径
     filename: '[name].[chunkhash:8].js', // 输出的文件名
  },
  /**
   * 解析文件规则
  */
  resolve: {
    extensions: ['.js', '.ts']
  },
  /**
   * 使用相关 module 解析各种语言
  */
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              // true 编译时不能进行类型检查，只做语言转换
              transpileOnly: true
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve('public/index.html'),
      chunksSortMode: 'none'
    }),
    new ForkTsCheckerWebpackPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}
