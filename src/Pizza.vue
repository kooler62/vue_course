<template>
  <div>
    <h1>{{ pizzaName }}</h1>
  </div>
</template>

<script>
  export default {
    props:['pizzaName']
  }
</script>

<!-- атрибут scoped  изолированый стиль-->
<style scoped>
  div {
    border: 1px solid green;
  }
</style>
