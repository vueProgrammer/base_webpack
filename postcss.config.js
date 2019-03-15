//自动添加css兼容属性
module.exports = {
  plugins: {
    'autoprefixer': {
      browsers: [
        "defaults",
        "ie >= 10",
        "last 2 versions",
        "> 0.2%",
        "iOS 7",
        "last 10 versions"
      ]
    },
    'postcss-pxtorem': {
      rootValue: 100,//结果为：设计稿元素尺寸/100
      propList: ['*']
    }
  }
}
