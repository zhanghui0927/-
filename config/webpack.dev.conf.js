'use strict'
const {merge} = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const path = require('path');
const webpack = require('webpack');

module.exports = merge(baseWebpackConfig, {
  // 模式
  mode: "development",
  // 调试工具
  devtool: 'inline-source-map',
  optimization: {
    moduleIds: 'named', // 对调试更友好的可读的 id
    nodeEnv: 'development',
  },
  // 插件
  plugins: [
    // 热更新相关
    // new webpack.HotModuleReplacementPlugin(), // 不用
  ],
  // 开发服务器
  devServer: {
    // contentBase: false,// 默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录
    // historyApiFallback: true,// 在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    compress: true,// 启用gzip压缩
    // inline: true,// 设置为true，当源文件改变时会自动刷新页面,实现自动刷新（必须在命令行输入--inline）,新版本已启用，默认为true
    // progress:true, //显示打包进程，在package.json的启动命令加上--progress，此处加上不管用
    hot: true,//实现热加载, 模块热更新，取决于HotModuleReplacementPlugin
    open: true,// 自动打开浏览器
    // host: '127.0.0.1',// 设置默认监听域名，如果省略，默认为“localhost”
    port: 8080, // 设置默认监听端口，如果省略，默认为“8080”
    // overlay: true,
  }
});
