<template>
  <tr :class="{ header: isHeader }">
    <td :class="{ header: isHeader }" v-if="columns.find(col => col.name === 'name')">{{ row.name }}</td>
    <td :class="{ header: isHeader }" v-if="columns.find(col => col.name === 'rent')">{{ row.rent }}</td>
  </tr>
</template>

<script>
export default {
  props: {
    row: {
      type: Object,
      required: true
    },
    isHeader: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    columns() {
      return this.$store.getters.getColumns
    }
  }
}
</script>

<style scoped>
tr.header {
  background-color: whitesmoke;
  font-weight: bold;
}
td {
  border: 1px solid gray;
}
</style>
