<template>
  <tr>
    <td v-if="columns.find(col => col.name === 'name')">{{ row.name }}</td>
    <td v-if="columns.find(col => col.name === 'rent')">{{ row.rent }}</td>
  </tr>
</template>

<script>
export default {
  props: {
    row: {
      type: Object,
      required: true
    }
  },
  computed: {
    columns() {
      return this.$store.getters.getColumns
    }
  }
}
</script>

<style>
</style>
