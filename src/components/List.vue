<template>
  <table>
    <draggable v-model="list" draggable=".list-row" @start="drag=true" @end="drag=false">
      <ListRow slot="header" :row="headerRow" :isHeader="true" />
      <ListRow v-for="(row, i) in list" :key="i" :row="row" class="list-row" />
    </draggable>
  </table>
</template>

<script>
import ListRow from './ListRow'
import draggable from 'vuedraggable'

export default {
  components: {
    ListRow,
    draggable
  },
  computed: {
    headerRow() {
      const ret = {}
      for(const column of this.$store.getters.getColumns) {
        ret[column.id] = column.name
      }
      return ret
    },
    list: {
      get() {
        return this.$store.state.list
      },
      set(value) {
        this.$store.dispatch('rearrangeList', value)
      }
    }
  }
}
</script>

<style scoped>
table {
  width: auto;
  height: 100px;
  border-collapse: collapse;
  border-spacing: 0;
}
</style>
