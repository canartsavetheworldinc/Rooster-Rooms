<template>
  <table>
    <ListRow :row="headerRow" :isHeader="true" />
    <ListRow v-for="(row, i) in list" :key="i" :row="row" />
  </table>
</template>

<script>
import ListRow from './ListRow'

export default {
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  components: {
    ListRow
  },
  computed: {
    headerRow() {
      const ret = {}
      for(const column of this.$store.getters.getColumns) {
        ret[column.name] = column.name
      }
      console.log(ret)
      return ret
    }
  }
}
</script>

<style scoped>
table {
  border-collapse: collapse;
  border-spacing: 0;
}
</style>
