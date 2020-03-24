import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '@/assets/css/fonts.css'
import Notifications from 'vue-notification'

Vue.use(Notifications)
Vue.use(require('vue-moment'))
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
