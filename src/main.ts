import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { init } from './init'
import ElementUI from 'element-ui'

import '@/assets/style/index.scss'

Vue.config.productionTip = false
Vue.use(ElementUI)

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
  }).$mount('#root')
}
