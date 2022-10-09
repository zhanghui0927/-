'use strict'
const { merge } = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const baseWebpackConfig = require('./webpack.base.conf');

module.exports = merge(baseWebpackConfig, {
  // 模式
  mode: "production", // mode设置为production后,打包时自动压缩代码
  // 调试工具
  devtool: 'source-map',
  // 输出
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: "js/[name].[chunkhash].js",
  },
  // 插件
  plugins: [
    new CleanWebpackPlugin(),
    // new webpack.HashedModuleIdsPlugin(),
  ],
  // 代码分离相关
  optimization: {
    moduleIds: 'deterministic', // 代替new webpack.HashedModuleIdsPlugin(),
    nodeEnv: 'production',
    // minimizer: [new UglifyJSPlugin()],
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: false,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial',
        }
      }
    }
  }
});