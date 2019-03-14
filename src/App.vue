<template>
  <div class="red">
    {{ msg }}
    <img src="../src/assent/cart_box_bg.png" alt="">
    <List />
  </div>
</template>

<script>
import List from '@/components/list.vue'

export default {
  name: 'Vue',
  data () {
    return {
      msg: 'hello vue',
    }
  },
  components: {
    List
  }
}
</script>

<style lang="css" scoped>
.red{
  color: red;
  font-size: 24px;
  transform: rotate(0deg);
}
</style>
