<template>
  <div id="app">
    <app-pizza></app-pizza>
    <app-counter></app-counter>
  </div>
</template>

<script>
  //локальныий импорт компонента
  import Pizza from "./Pizza.vue";
  import Counter from "./Counter";

  export default {
    name: 'app',
    components: {
      'appPizza': Pizza,
      'appCounter': Counter
    }
  }
</script>
