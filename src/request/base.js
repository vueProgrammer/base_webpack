/**
 * 接口域名的管理
 */
 let interfaceUrl = ''
 switch(process.env.NODE_ENV) {
   case 'development': {
     interfaceUrl = 'http://0.0.0.0'
   }
     break
   case 'test': {
     interfaceUrl = 'http://0.0.0.0'
   }
     break
   case 'production': {
     interfaceUrl = 'http://0.0.0.0'
   }
     break
 }

 let API = {
   getMovie:'https://bird.ioliu.cn/v1/?url=http://api.douban.com/v2/movie/in_theaters',
 }

export default API
