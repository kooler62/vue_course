<template>
  <div>
    <h2>Pizza name {{ pizzaName}}</h2>
    <p>price : {{ pizzaprice }}</p>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                pizzaName: "Деревенская",
                pizzaprice: 115
            }
        }
    }
</script>

<style scoped>

</style>
