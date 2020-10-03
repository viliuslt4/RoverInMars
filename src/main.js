import Vue from 'vue'
import App from './App'
import store from './store'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode:'history',
  routes: Routes
})

new Vue({
  el:'#app',
  store,
  router: router,
  render: h => h(App)
})
