// 本js为生产环境下webpack配置文件
const merge=require('webpack-merge');
const baseWebpackConfig=require('./webpack.base.conf.js');
const webpack=require('webpack');
const path=require('path');
const DIST_PATH=path.resolve(__dirname,"../dist");
//打包之前清除文件
const CleanWebpackPlugin=require('clean-webpack-plugin');
// html生成优化
const HtmlWebpackPlugin=require('html-webpack-plugin');
//打包的时候分析包大小等
const BundleAnalyzerPlugin=require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
//分离css
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
// 压缩css
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// 开启gzip压缩
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
// 优化打包速度
const HappyPack = require('happypack');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

module.exports=merge(baseWebpackConfig,{
  mode:"production",//设置 process.env.NODE_ENV = production。
  devtool:'cheap-module-source-map',//不带列映射(column-map)的 SourceMap，将加载的 Source Map 简化为每行单独映射。
  output:{
    filename:"js/[name].[hash:8].js",
    path:DIST_PATH
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        use:[
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
               publicPath: '../',
            }
          },
          {loader:'css-loader'},
          {loader:"postcss-loader"}
        ]
      },
      {
        test:/\.(sc|sa)ss$/,
        use:[
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
               publicPath: '../',
            }
          },
          {loader:'css-loader'},
          {loader:"sass-loader"},
          {loader:"postcss-loader"}
        ]
      },
      {
        test:/\.less$/,
        use:[
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
               publicPath: '../',
            }
          },
          {loader:'css-loader'},
          {loader:'less-loader'},
          {loader:"postcss-loader"}
        ]
      },
      {
        test:/\.(png|svg|jpg|gif)$/,
        use:[
          {
            loader:'url-loader',
            options:{
              limit:10240,
              name:"[name].[hash:8].[ext]",
              outputPath:"images/"
            }
          }
        ]
      },
      {
        test:/\.js$/,
        exclude: '/node_modules/',
        include:path.resolve(__dirname,"../src"),
        use:'HappyPack/loader?id=buildjs',
      }

    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        uglifyOptions: {
          compress: {
            warnings: false, // 清除 waring
            drop_console: true, // 清除 console
            drop_debugger:true //清除 debugger
          }
        }
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
    splitChunks: {
      // 默认将node_modules中依赖打包到 venders.js
      chunks: 'all'
    },
    // 将 webpack 运行时生成代码打包到 runtime.js
    runtimeChunk: true
  },
  plugins:[
    new CleanWebpackPlugin({root:path.resolve(__dirname,'../'),verbose:true}),//每次打包前清除dist
    new HtmlWebpackPlugin({
      //将目录下的index.html引进生成的dist中的index.html
      template:'index.html',
      title:'生产环境title',
      favicon:'',
      minify:{
        removeComments:true,
        collapseWhitespace:true,
        removeAttributeQuotes:true
      },
    }),
    new BundleAnalyzerPlugin({//打包分析
      analyzerPort:10000, // 打包分析端口
      openAnalyzer:true,
    }),
    new MiniCssExtractPlugin({//分离css
      filename:"css/[name].[chunkhash:8].css",
      chunkFilename:"css/[name].[hash:8].css"
    }),
    new CompressionWebpackPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: productionGzipExtensions,
      threshold: 10240,
      minRatio: 0.8
    }),
    new HappyPack({
      id:'buildjs',//use:'HappyPack/loader?id=buildjs'
      use:[{
        loader:'babel-loader?cacheDirectory=true'
      }],
      //共享进程池
      threadPool: happyThreadPool,
      //允许 HappyPack 输出日志
      verbose: true,
    })

  ]
});
