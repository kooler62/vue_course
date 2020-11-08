<template>
  <div>
    <h2>Pizza name {{ pizzaName }}/ {{ reversName }}</h2>
    <p>price : {{ pizzaPrice }}</p>
    <button @click="changeName">Change Name</button>
  </div>
</template>

<script>
    export default {
        props: ['pizzaName', 'pizzaPrice'],
        methods: {
            changeName() {
                this.pizzaName = 'Маргарита';
                //имя события, значения, которыми хотим уведомить
                this.$emit('nameChanged', this.pizzaName)
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
