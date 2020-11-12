import Vue from 'vue'
import App from './App.vue'

import ListNames from "./ListNames";

Vue.component('app-list', ListNames);

Vue.mixin({
  beforeUpdate() {
    console.log('before Update')
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
});

