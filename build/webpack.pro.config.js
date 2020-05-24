const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const nodeExternals = require('webpack-node-externals'); // 打包时，不会将 vue 的源码打包进来

module.exports = {
    entry: './src/main.ts',
    output: {
      libraryTarget: 'umd',
      library: 'EmployeeQuery'
    },
    externals: [nodeExternals()],
    plugins: [
      new CleanWebpackPlugin()
    ]
}