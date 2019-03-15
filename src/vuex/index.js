import Vue from 'vue'
import Vuex from 'vuex'
import getData from '@/request/api'

import VuexPersistence from 'vuex-persist'


Vue.use(Vuex)



const state = {
  userInfo: {}
}

const getters = {
  userInfo(state) {
    return state.userInfo
  }
}

const actions = {
  // 参数列表：{commit, state} state指的是state数据 commit调用mutations的方法  假设userInfoData是调用后台接口得到的数据
  getUserInfoData({ commit, state }) {
    let userInfoData
    // 发送请求
    getData.login().then(res => {
      userInfoData = res.data.subjects
    })
    .then(res => {
      // 调用mutaions里面的方法
      commit("setUserInfo", userInfoData);
    })
  }
};

const mutations = {
  // 设置userInfo info 是 actions 中传入的 userInfoData
  setUserInfo(state, info) {
    state.userInfo = info
  }
};

const persist = new VuexPersistence({
  // 其他参数看文档
  storage: window.sessionStorage
})

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins: [persist.plugin]
});
export default store;
