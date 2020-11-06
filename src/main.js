import Vue from 'vue'
// import App from './App.vue'

//регестрируем компонент
Vue.component('my-counter', {
  template: `
    <div>
      <h2>Счетчик {{ counter }}</h2>
      <button @click="counter ++">+1</button>
    </div>
  `,
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    add: function () {
      this.counter++;
    }
  }
});

new Vue({
  el: '#app',
  // data: {
  //   counter: 0,
  //   counter2: 0
  // }
  //render: h => h(App)
});
