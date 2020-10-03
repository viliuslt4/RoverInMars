import Vue from 'vue'
import Vuex from 'vuex'
import dimensions from './modules/dimensions'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    dimensions
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})