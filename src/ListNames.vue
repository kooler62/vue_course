<template>
  <div>
    <h1>List names</h1>
    <input type="text" v-model="search">
    <ul>
      <li v-for="name in filteredNames" :key="name">{{ name }}</li>
    </ul>
  </div>

</template>

<script>
  import ListMixin from "./listMixin";

  export default {
    mixins: [ListMixin]
  }
</script>
