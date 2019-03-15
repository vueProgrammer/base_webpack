/**
 * axios封装 请求拦截、响应拦截、错误统一处理
 */
import axios from 'axios';

/**
 * toast 提示
*/
const tip = msg => {
  // 可引入 element-ui 或其他插件用作toast提示
  console.log(msg)
}

/**
 * 跳转登录页
 */
const toLogin = () => {
  // 开头可引入 router 用作路由跳转
  console.log("跳转登陆")
}

/*
*
 * 请求失败后的状态码处理
*/
const errorHandle = (status, other) => {
  // 状态码判断
  switch (status) {
    // 401: 未登录状态，跳转登录页
    case 401:
      toLogin();
      break;
    // 403 token过期
    // 清除token并跳转登录页
    case 403:
      tip('登录过期，请重新登录');
      localStorage.removeItem('token');
      setTimeout(() => {
          toLogin();
      }, 1000);
      break;
    // 404请求不存在
    case 404:
      tip('请求的资源不存在');
      break;
    default:
      console.log(other);
  }
}

// 创建axios实例
var instance = axios.create({ timeout: 10000 });
// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'Access-Control-Allow-Origin';
/**
 * 请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */
instance.interceptors.request.use(
  config => {
    // 登录流程控制中，根据本地是否存在token判断用户的登录情况 及 token 是否过期
    // const token = '123';
    // token && (config.headers.Authorization = token);
    return config;
  },
  error => Promise.error(error)
)

// 响应拦截器
instance.interceptors.response.use(

  // 请求成功
  res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
  // 请求失败
  error => {
    const { response } = error;
    if (response) {
      // 请求已发出，但是不在2xx的范围
      errorHandle(response.status, response.data.message);
      return Promise.reject(response);
    } else {
      // 处理断网的情况
      console.log("大佬，你的网络GG了");
    }
  }
);
export default instance;
