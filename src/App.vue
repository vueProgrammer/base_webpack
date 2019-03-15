<template>
  <div id="app">
    <router-link to="/">Home</router-link> |
    <router-link to="/book">About</router-link>
    <router-view/>
  </div>
</template>

<script>
import List from '@/components/list.vue'

export default {
  name: 'Vue',
  data () {
    return {
      //
    }
  }
}
</script>

<style lang="css" scoped>
#app{
  color: red;
  font-size: 24px;
  transform: rotate(0deg);
}
</style>
