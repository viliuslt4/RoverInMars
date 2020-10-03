import Vue from 'vue'
import Vuex from 'vuex'
import dimensions from './modules/dimensions'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    dimensions
  },
})