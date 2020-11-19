import Vue from 'vue'
import App from './App.vue'
import router from './routes/index';
import Vuetify from './plugins/vuetify';
import '@babel/polyfill'

Vue.use(Vuetify);

new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
