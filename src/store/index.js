import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import getters from './getter.js'
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex)

// 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)

// 创建 Store(仓库) 并导出
export default new Vuex.Store({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
})
