<template>
  <div>
    <h2>Pizza name {{ pizzaName }}/ {{ reversName }}</h2>
    <p>price : {{ pizzaPrice }}</p>
  </div>
</template>

<script>
    export default {
        // props: ['pizzaName', 'pizzaPrice'],
        // props: {
        //     pizzaName: String,
        //     pizzaPrice: Number
        // },
        props: {
            pizzaName: {
                type: String,
           //     required: true,
                default: 'Empty'
            },
            pizzaPrice: Number
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
