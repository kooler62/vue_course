<template>
  <div id="app">
    <app-pizza pizzaName="Деревенская"></app-pizza>
  </div>
</template>

<script>
  import Pizza from "./Pizza.vue";

  export default {
    name: 'app',
    components: {
      'appPizza': Pizza,
    }
  }
</script>
