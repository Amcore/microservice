import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import singleSpaVue from 'single-spa-vue'
import './registerServiceWorker'

Vue.config.productionTip = false

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#app2',
    store: store,
    render: (h: any) => h(App),
    router: router
  }
})

export const bootstrap = function (props: any) {
  return vueLifecycles.bootstrap(props)
}

export const mount = function (props: any) {
  return vueLifecycles.mount(props)
}

export const unmount = function (props: any) {
  return vueLifecycles.unmount(props)
}
