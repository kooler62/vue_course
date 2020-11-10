<template>
  <div>
    <slot name="title"></slot>
    <hr>
    <slot name="text"></slot>

  </div>
</template>

<script>
  export default {
  }
</script>

<!-- атрибут scoped  изолированый стиль-->
<style scoped>
  div {
    border: 1px solid green;
  }
  h2 {
    color: red;
  }
</style>
