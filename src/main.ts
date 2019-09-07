import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { init } from './init'

Vue.config.productionTip = false

init().then(() => { initVue() })

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')

function initVue() {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}
