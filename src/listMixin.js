export default {
  data() {
    return {
      search: '',
      names: ['Kostia', 'Anna', 'Vladimir'],
    }
  },
  computed: {
    filteredNames() {
      return this.names.filter(name => {
        return name.toLowerCase().indexOf(this.search) !== -1
      })
    }
  },
  created() {
    console.log('created')
  }
}
