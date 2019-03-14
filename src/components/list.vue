<template>
  <div class="li">
    <span v-for="item in list" :key='item.key'>{{ item.text }}</span>
  </div>
</template>

<script>
import getData from '@/request/api'

export default {
  name: 'List',
  data () {
    return {
      list: [
        {
          text: '列表1'
        },
        {
          text: '列表2'
        },
        {
          text: '列表3'
        },
        {
          text: '列表4'
        }
      ]
    }
  },
  mounted() {
    // 接口调用演示
    // getData.login().then(res => {
    //   console.log(res.data)
    // })
  }
}
</script>

<style lang="css" scoped>
.li{
  font-size: 100px;
}
</style>
