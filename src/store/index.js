import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutation'
import state from './state'
Vue.use(Vuex)

export default new Vuex.Store({
  state: state,
  mutations: mutations
})
