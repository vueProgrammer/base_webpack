<template>
  <div class="li">
    <img src="../assent/logo.png" alt="">
    <img src="../assent/btn_begin.png" alt="">
    <div class="test"></div>
    <div class="icon_test">
      <em></em><em></em><em></em>
    </div>
    <!-- 此处调用的 userInfo 是 computed 中的函数方法，此处 userInfo 输出的是 this.$store.getters.userInfo -->
    <span v-for="item in userInfo" :key='item.key'>{{ item.title }}</span>
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      //
    }
  },
  created(){
    console.log('11111')
    this.$store.dispatch('getUserInfoData');
  },
  mounted() {
    // 接口调用演示
    // this.$getData.login().then(res => {
    //   console.log(res.data)
    // })
  },
  computed: {
    userInfo: function() {
      // 通过vuex的getters方法来获取state里面的数据
      return this.$store.getters.userInfo;
    }
  },
  methods: {
    updateUserInfo() {
      // 调用 actions 方法中的方法 调用后台接口更新state里面的数据
      this.$store.dispatch('getUserInfoData');
    },
    setUserInfo() {
      // 调用 mutations 方法中的方法来设置 state 里面的数据 本次事例全程未调用该方法
      this.$store.commit('setUserInfo');
    }
  }
}
</script>

<style lang="less">
.li{
  font-size: 24px;
  span {
    display: block;
  }
}
.icon_test em{
  display: inline-block;
  width: 68px;
  height: 68px;
  background-repeat: no-repeat;
  &:nth-of-type(1){
    background-image: url(../assent/sprites/er.png);
  }
  &:nth-of-type(2){
    background-image: url(../assent/sprites/gao.png);
  }
  &:nth-of-type(3){
    background-image: url(../assent/sprites/gou.png);
  }
}
.test{
  width: 100px;
  height: 100px;
  background-size: cover;
  background-image: url(../assent/btn_begin.png);
}
</style>
