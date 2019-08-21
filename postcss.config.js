//自动添加css兼容属性
module.exports = {
  plugins: {
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
            return Promise.reject(new Error('just png')) // 只合并png图片
          }
          return Promise.resolve()
        }
        return Promise.reject(new Error('just sprites')) // 只合并sprites目录下的图片
      },
      groupBy: function(image) {
        // 如果sprites，目录下有且有大于2张图的时候进行合并雪碧图处理，否则不进行合并
        const spritePath = image.url.split('sprites')
        if(spritePath.length > 1){
          const spriteImagePath = spritePath[1].split('/')
          if(spriteImagePath.length > 2){
            const groupName = spriteImagePath[1]
            return Promise.resolve(groupName)
          }else{
            return Promise.reject(new Error('目录下文件过少，忽略合并'))
          }
        }else{
          return Promise.reject(new Error('目录没有文件，忽略合并'))
        }
      }
    }
  }
}
