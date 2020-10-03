import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import App from './App'
import store from './store'
import VueRouter from 'vue-router'
import Routes from './routes'


Vue.use(VueRouter)

const router = new VueRouter({
  mode:'history',
  routes: Routes
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
new Vue({
  el:'#app',
  store,
  router: router,
  vuetify,
  render: h => h(App)
})
