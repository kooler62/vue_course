<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <app-pizza></app-pizza>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue App'
    }
  }
}
</script>
