import Vue from 'vue'
import Vuex, { Store } from 'vuex'

import user from './modules/user'

Vue.use(Vuex)

const store: Store<any> = new Vuex.Store({

  modules: {
    user
  }
})

export default store
