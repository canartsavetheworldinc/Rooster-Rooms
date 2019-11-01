<template>
  <tr :class="{ header: isHeader }">
    <td :class="{ header: isHeader }" v-if="true">{{ row.name }}</td>
    <td :class="{ header: isHeader }" v-if="columns.find(col => col.id === 'ward').enabled">{{ row.ward }}</td>
    <td :class="{ header: isHeader }" v-if="columns.find(col => col.id === 'line').enabled">{{ row.line }}</td>
    <td :class="{ header: isHeader }" v-if="columns.find(col => col.id === 'station').enabled">{{ row.station }}</td>
    <td :class="{ header: isHeader }" v-if="columns.find(col => col.id === 'time').enabled">{{ row.time }}</td>
    <td :class="{ header: isHeader }" v-if="columns.find(col => col.id === 'old').enabled">{{ row.old }}</td>
    <td :class="{ header: isHeader }" v-if="columns.find(col => col.id === 'floor').enabled">{{ row.floor }}</td>
    <td :class="{ header: isHeader }" v-if="columns.find(col => col.id === 'layout').enabled">{{ row.layout }}</td>
    <td :class="{ header: isHeader }" v-if="columns.find(col => col.id === 'size').enabled">{{ row.size }}</td>
    <td :class="{ header: isHeader }" v-if="columns.find(col => col.id === 'rent').enabled">{{ row.rent }}</td>
    <td :class="{ header: isHeader }" v-if="columns.find(col => col.id === 'autolock').enabled">{{ row.autolock }}</td>
    <td :class="{ header: isHeader }" v-if="columns.find(col => col.id === 'delibox').enabled">{{ row.delibox }}</td>
    <td :class="{ header: isHeader }" v-if="columns.find(col => col.id === 'unitbath').enabled">{{ row.unitbath }}</td>
    <td :class="{ header: isHeader }" v-if="columns.find(col => col.id === 'custom_1').enabled">{{ row.custom_1 }}</td>
    <td :class="{ header: isHeader }" v-if="columns.find(col => col.id === 'custom_2').enabled">{{ row.custom_2 }}</td>
    <td>
      <div v-if="isHeader">
        <router-link to="/condition">edit</router-link>
      </div>
      <div v-else>
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
