// 本js为开发环境下的webpack配置
const webpack = require('webpack'); //引入webpack模块
const path = require('path');
const merge = require('webpack-merge'); //webpack-merge提供了一个merge连接数组并合并创建新对象的函数。
const baseWebpackConfig=require('./webpack.base.conf.js'); //引入基础webpack设置。
const HtmlWebpackPlugin=require('html-webpack-plugin'); //美化和创建html
const derServerPort=8082; //开发环境的端口号。
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin'); //错误提示

module.exports=merge(baseWebpackConfig,{
  mode:'development',//开发环境,会将 process.env.NODE_ENV 的值设为 development。启用 NamedChunksPlugin 和 NamedModulesPlugin
  devtool:'cheap-module-eval-source-map',//不带列映射(column-map)的 SourceMap，将加载的 Source Map 简化为每行单独映射。
  module:{
    rules:[
      {
        test:/\.css$/,
        use:[
          {loader:"style-loader"},
          {loader:"css-loader"},
          {loader:"less-loader"},
          {loader:"postcss-loader"}
        ]
      },
      {
        test:/\.(sc|sa)ss$/,
        use:[
          {loader:"style-loader"},
          {loader:"css-loader"},
          {loader:"sass-loader"},
          {loader:"postcss-loader"}
        ]
      },
      {
        test:/\.less$/,
        use:[
          {loader:"style-loader"},
          {loader:"css-loader"},
          {loader:"less-loader"},
          {loader:"postcss-loader"}
        ]
      },
      {
        test:/\.(png|svg|jpg|gif)$/,
        use:[
          {
            loader:'url-loader',
            options:{
              limit:10240
            }
          }
        ]
      },
      {
        test:/\.js$/,
        use:'babel-loader',
        exclude:/node_modules/, //排除node_modules目录下的文件
        include:path.resolve(__dirname,"../src")
      }
    ]
  },
  devServer:{
    port:derServerPort,//指定要监听请求的端口号
    overlay:{//当编译器存在错误或警告时,将浏览器显示全屏覆盖
      warnings:false,
      errors:true,
    },
    host:"localhost",
    open:true,//开发服务器将打开浏览器
    noInfo:true,//那些显示的 webpack 包(bundle)信息」的消息将被隐藏。错误和警告仍然会显示。
    https:false,
    hot:true,//启用webpack的模块热更新
    compress:true,//一切服务都启用gzip压缩
    progress:true,//将任务进度输出到控制台
    quiet:true,
    useLocalIp:false,//此选项允许浏览器使用你的本地ip打开
    proxy:{//代理服务器
      "/api":{
        target:"https://api.douban.com",
        changeOrigin:true,
        pathRewrite:{"^api":""},
        secure: false,
      }
    }
  },
  plugins:[
    new HtmlWebpackPlugin({ //处理html
      template:'index.html',//开发环境需要路径
      inject:'body',//所有javascript资源将被放置在body元素的底部
      minify:{
        html5:true,
        collapseWhitespace: true, //把生成的 index.html 文件的内容的没用空格去掉，减少空间
      },
      title:'开发环境title',
      hash:true,
      favicon:'',//将给定的favicon路径添加到输出HTML
      showErrors:true,
    }),
    new webpack.HotModuleReplacementPlugin(), //热更新
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [`You application is running here http://localhost:${derServerPort}`],
        notes: ['Some additionnal notes to be displayed unpon successful compilation']
      },
      onErrors: function (severity, errors) {},
      clearConsole: true,
      additionalFormatters: [],
      additionalTransformers: []
    })
  ]
});
