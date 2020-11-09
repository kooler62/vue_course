<template>
  <div>
    <h2>Pizza name {{ pizzaName }}/ {{ reversName }}</h2>
    <p>price : {{ pizzaPrice }}</p>
    <button @click="changeName">Change Name</button>
    <button @click="changeFunc()">Change From Parent</button>
    <button @click="UpdateCounter()">Update Counter</button>

  </div>
</template>

<script>
  import {eventEmitter} from "./main";

  export default {
    props: ['pizzaName', 'pizzaPrice', 'changeFunc'],
    methods: {
      changeName() {
        this.pizzaName = 'Маргарита';
        //имя события, значения, которыми хотим уведомить
        this.$emit('nameChanged', this.pizzaName)
      },
      UpdateCounter() {
        eventEmitter.$emit('CounterUpdated',5);
      }
    },
    computed: {
      reversName() {
        return this.pizzaName.split('').reverse().join('');
      }
    }
  }
</script>

<style scoped>

</style>
