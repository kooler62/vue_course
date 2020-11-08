<template>
  <div id="app">
    <h1>Parent: {{ pizzaName }}</h1>
    <app-pizza :pizzaName="pizzaName" :pizzaPrice="pizzaPrice"></app-pizza>
  </div>
</template>

<script>
    //локальныий импорт компонента
    import Pizza from "./Pizza.vue";

    export default {
        name: 'app',
        data() {
            return {
                pizzaName: 'Деревенская',
                pizzaPrice: 115
            }
        },
        components: {
            'appPizza': Pizza
        }
    }
</script>
