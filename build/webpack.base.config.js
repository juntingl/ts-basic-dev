const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 开启 transpileOnly 后，使用 fork-ts-checker-webpack-plugin 进行类型检查
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

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
    extensions: ['.vue', '.js', '.ts'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, '..', 'src')
    }
  },
  /**
   * 使用相关 module 解析各种语言
  */
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              // true 编译时不能进行类型检查，只做语言转换
              transpileOnly: true,
              // 给 vue 文件自动加上 .ts 扩展名，方便 ts 处理
              appendTsSuffixTo: [/\.vue$/]
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
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
