import {
  GetterTree,
  ActionTree,
  MutationTree
} from 'vuex'

import {
  USER
} from '../name'

const {
  G,
  M,
  A
} = USER

interface UserType {
  name: string,
  [propName: string] : any
}

interface ModuleType {
  state: UserType,
  getters: GetterTree<UserType, any>,
  mutations: MutationTree<UserType>,
  actions: ActionTree<UserType, any>
}

const user: ModuleType = {
  state: {
    name: ''
  },

  getters: {
    [G]: (state: UserType) => state
  },

  mutations: {
    [M]: (state: UserType, data: UserType) => {
      state = data
    }
  },

  actions: {
    [A]: ({ commit, state: UserType }, data: UserType) => {
      commit(M, data)
    }
  }
}

export default user
