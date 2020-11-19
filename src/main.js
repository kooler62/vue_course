import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import router from "./routes";
import vuetify from './plugins/vuetify';
import '@babel/polyfill'

Vue.use(VueRouter);

new Vue({
  el: '#app',
  render: h => h(App),
  vuetify,
  router
});
