import Vue from 'vue'
import App from './App.vue'
import VueParticlesJS from './vue-particles.js'

Vue.use(VueParticlesJS)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
