import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import './components/axios'

Vue.config.productionTip = false
Vue.use(Vuelidate)

// to ensure re-authentication after refresh 
store.dispatch('auth/attempt', localStorage.getItem('token'))
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
