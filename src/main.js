import Vue from 'vue'
// import App from './App.vue'

//регестрируем компонент
var component = {
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
};

new Vue({
  el: '#app',
  // регестрируем компонент локально
  components:{
    'my-counter': component
  }
  // data: {
  //   counter: 0,
  //   counter2: 0
  // }
  //render: h => h(App)
});

new Vue({
  el: '#app2',
  components:{
    'my-counter': component
  }
  // не работает
  // components: {
  //   myСounter: component
  // }
  //render: h => h(App)
});
