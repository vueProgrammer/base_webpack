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

  3.15更新

      增加vuex

      本次未对vuex中的 state actions mutations 做分组件区分，可根据需求自己确定是否进行区分

      测试调用的是豆瓣电影热播前20，仅用于测试

      增加vuex数据缓存，页面刷新数据不丢失

      http.js中请求拦截器中的token验证已关闭，可根据业务需求进行释放

      wepack.base.config 文件中的代码校验模块已注释，可根据部门需求进行释放

      .babelrc 文件对浏览器兼容的区间进行调整

  3.18 更新

      增加image自动合成雪碧图功能，配置文件为： postcss.config.js

      增加 build 之后自动删除 console.log 代码

      解决 uglifyjs-webpack-plugin 版本原因打包报错问题


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
