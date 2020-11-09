<template>
  <div id="app">
    <h1>Parent: {{ pizzaName }}</h1>
    <app-pizza :pizzaName="pizzaName"
               :pizzaPrice="pizzaPrice"
               :changeFunc="changeNameToPizza"
               @nameChanged="pizzaName = $event"
               @counterUpdated="counter = $event"
    ></app-pizza>
    <app-counter></app-counter>
  </div>
</template>

<script>
  //локальныий импорт компонента
  import Pizza from "./Pizza.vue";
  import Counter from "./Counter";

  export default {
    name: 'app',
    data() {
      return {
        pizzaName: 'Деревенская',
        pizzaPrice: 115
      }
    },
    methods: {
      changeNameToPizza() {
        this.pizzaName = 'sfsdfd';

      }
    },
    components: {
      'appPizza': Pizza,
      'appCounter': Counter
    }
  }
</script>
