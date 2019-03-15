/**
 * api 模块接口列表
 */
import API from '@/request/base.js' // 导入接口域名列表
import axios from '@/request/untils/http.js' // 导入http中创建的axios实例
import qs from 'qs' // 根据需求是否导入qs模块

const getData = {
  // get,演示
  getMovie () {
    return axios.get(API.getMovie)
  },
  // get,演示
  articleDetail (id) {
    return axios.get(`API.getAddresse/${id}`, {
      params: params
    })
  },
  // post 提交
  login () {
    return axios.post(API.getMovie)
  }
}


export default getData
