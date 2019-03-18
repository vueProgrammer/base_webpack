<template lang="html">
  <div class="">
    <p>{{ msg }}</p>
    <List />
  </div>
</template>

<script>
import List from '@/components/list'
console.log('3333333')
export default {
  name: "Book",
  data() {
    return {
      msg: "这是list"
    }
  },
  components: {
    List
  }
}
</script>

<style lang="css" scoped>

</style>
