<template>
  <tr :class="{ header: isHeader }">
    <td :class="{ header: isHeader }" v-if="columns.find(col => col.name === 'name')">{{ row.name }}</td>
    <td :class="{ header: isHeader }" v-if="columns.find(col => col.name === 'rent')">{{ row.rent }}</td>
    <td>
      <div v-if="!isHeader">
        <button @click="edit()">edit</button>
      </div>
    </td>
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
  methods: {
    edit() {
      this.$store.dispatch("setFormRegisterEvent", this.updateItem)
      this.$store.dispatch("setFormdata", this.row)
      this.$modal.show("edit-list-item")
    },
    updateItem() {
      const id = this.row.id
      const formdata = this.$store.getters.getFormdata
      this.$store.dispatch("updateListItem", {
        id,
        ...formdata
      })
      this.$store.dispatch("clearForm")
      this.$modal.hide("edit-list-item")
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
