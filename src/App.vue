<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <app-pizza></app-pizza>
  </div>
</template>

<script>
    //локальныий импорт компонента
    import Pizza from "./Pizza.vue";

    export default {
        name: 'app',
        data() {
            return {
                msg: 'Welcome to Your Vue App'
            }
        },
        components: {
            'appPizza': Pizza
            //или
            // 'app-pizza': Pizza
        }
    }
</script>
