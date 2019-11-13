import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import practice from './views/practice.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '',
  routes: [
    {
      path: '/',
      redirect: '/portal'
    },
    {
      path: '/practice',
      name: 'practice',
      component: practice
    },
    {
      path: '/portal',
      name: 'home',
      component: Home,
      children: [{
        path: '*',
        meta: {
          contrlMenu: true
        }
      }]
    }
  ]
})
