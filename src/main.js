import Vue from 'vue'
import App from './App.vue'
import router from "./routes";

Vue.use(VueRouter);

new Vue({
  el: '#app',
  render: h => h(App),
  // router: router  или router если совпадает ключ, значение
  router
});
