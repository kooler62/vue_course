import Vue from 'vue'
import App from './App.vue'

//импортируем директиву
import MyDirective from "./color";

// регистрируем до инициализации нашего Vue
Vue.directive('colored', MyDirective);

new Vue({
  el: '#app',
  render: h => h(App)
});

