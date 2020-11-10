<template>
  <div>
    <h2 v-colored:background="'purple'">{{ title }}</h2>
    <h2 v-colored:color="'orange'">{{ title }}</h2>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Изучаем Директивы'
      }
    }
  }
</script>

<style scoped>

</style>
