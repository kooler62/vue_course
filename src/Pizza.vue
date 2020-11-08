<template>
  <div>
    <h2>Pizza name {{ pizzaName}}</h2>
    <p>price : {{ pizzaPrice }}</p>
  </div>
</template>

<script>
    export default {
        props: ['pizzaName', 'pizzaPrice'],
    }
</script>

<style scoped>

</style>
