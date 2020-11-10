<template>
  <div id="app">
    <app-pizza pizzaName="Деревенская">
      <h2 slot="title">{{ pizzaName }}</h2>
      <p slot="text">lorem  Пицца</p>
    </app-pizza>
  </div>
</template>

<script>
  import Pizza from "./Pizza.vue";

  export default {
    name: 'app',
    data() {
      return {
        pizzaName: 'Маргарита'
      }
    },
    components: {
      'appPizza': Pizza,
    }
  }
</script>

<style scoped>

</style>
