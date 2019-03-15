<template>
  <div class="li">
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

<style lang="css" scoped>
.li{
  font-size: 24px;
}
.li span{
  display: block;
}
</style>
