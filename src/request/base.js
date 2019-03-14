/**
 * 接口域名的管理
 */
 let interfaceUrl = ''
 switch(process.env.NODE_ENV) {
   case 'development': {
     interfaceUrl = 'http:baidu.com/'
   }
     break
   case 'test': {
     interfaceUrl = ''
   }
     break
   case 'production': {
     interfaceUrl = ''
   }
     break
 }

 
 let API = {
   //获取地址
   getAddresse:interfaceUrl + '',


 }
export default API
