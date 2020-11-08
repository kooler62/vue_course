import Vue from 'vue'
import App from './App.vue'
//Сначала импортруем компонент
import Pizza from "./Pizza.vue";

//создаем тег, чтобы не пересекался с html5
Vue.component('app-pizza', Pizza);
new Vue({
  el: '#app',
  render: h => h(App)
});

