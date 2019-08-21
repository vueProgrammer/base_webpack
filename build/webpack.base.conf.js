// 本js为webpack基础配置
const path = require('path');
const SRC_PATH=path.resolve(__dirname,"../src");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  // 入口文件
  entry:{
    main:'./src/main.js'
  },
  //Resolve 配置 Webpack 如何寻找模块所对应的文件,extensions:在导入语句没带文件后缀时，Webpack 会自动带上后缀后去尝试访问文件是否存在。alias: 配置项通过别名来把原导入路径映射成一个新的导入路径。
  resolve:{
    extensions:['.vue','.js','.json'],
    alias:{
      '@':SRC_PATH
    }
  },
  module:{
    rules:[
      {
        test:/\.vue$/,//通过loader来预处理文件 允许你打包除了js之外的任何静态资源
        use:'vue-loader'
      },
      {
        test:/\.(woff|svg|eot|woff2|tff)$/,
        use:[
          {
            loader:'url-loader',
            options:{
              limit:10000
            }
          }
        ],
        exclude:/node_modules/,
      }
    ]
  },
  plugins:[
    //将loader通用至其他文件类型，例如.vue 中的 script
    new VueLoaderPlugin(),
  ]
}
