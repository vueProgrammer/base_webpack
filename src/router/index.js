import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import(/* webpackChunkName: "Home" */ '@/view/home.vue')
    },
    {
      path: '/book',
      name: 'Book',
      component: () => import(/* webpackChunkName: "Book" */ '@/view/book.vue')
    }
  ]
})
