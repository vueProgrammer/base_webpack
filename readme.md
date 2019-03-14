<!--

  页面title在webpack配置文件中设置

  在 plugins 方法中 new HtmlWebpackPlugin 函数。
    title为页面标题
    favicon为页面ico图标

  css loader 分别在开发配置文件和生产配置文件中分别设置，可分别单独配置方法，若无特殊需求，可将 css loader 合并至 base 配置文件中

 -->
更新点：

  抽离webpack配置文件 分别为：

      webpack.base.conf.js --基础配置

      webpack.dev.conf.js  --开发环境配置

      webpack.pro.conf.js  --生产环境配置

  .babelrc文件更新

  postcss.config.js 更新 增加自动转 rem 配置

  /lib/rem.js 自动转换 rem html font-size 标准

目前功能：
  css抽离压缩

  css自动生成浏览器兼容代码 例如：-webkit- -ms-

  js压缩分离

  html生成与压缩

  图片转base64及压缩

  代码检测及错误提示

  打包前清理dist目录

  打包缓存

  es6转es5

  css自动px转rem  //基准值在 postcss.config.js 中

  开启gzip压缩

  封装axios，支持 get post 拦截 可新增其他方法。
  
