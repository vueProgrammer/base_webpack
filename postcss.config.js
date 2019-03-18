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
    },
    'postcss-sprites': {
      basePath: './src/assent/sprites',
      spritePath: './src/assent/sprites',
      retina: true,
      filterBy: function(image) {
        if(image.url.includes('sprites')){
          if(!/\.png$/.test(image.url)){
            return Promise.reject(new Error('just png'))
          }
          return Promise.resolve()
        }
        return Promise.reject(new Error('just png2'))
      },
      groupBy: function(image) {
        const spritePath = image.url.split('sprites')
        if(spritePath.length > 1){
          const spriteImagePath = spritePath[1].split('/')
          if(spriteImagePath.length > 2){
            const groupName = spriteImagePath[1]
            return Promise.resolve(groupName)
          }else{
            return Promise.reject(new Error('not group'))
          }
        }else{
          return Promise.reject(new Error('not group'))
        }
      }
    }
  }
}
