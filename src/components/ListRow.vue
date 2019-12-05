<template>
  <tr :class="{ header: isHeader }">
    <td class="name" :class="{ header: isHeader }" v-if="true">{{ row.name }}</td>
    <td class="ward" :class="{ header: isHeader }" v-if="columns.find(col => col.id === 'ward').enabled">{{ row.ward }}</td>
    <td class="line" :class="{ header: isHeader }" v-if="columns.find(col => col.id === 'line').enabled">{{ row.line }}</td>
    <td class="station" :class="{ header: isHeader }" v-if="columns.find(col => col.id === 'station').enabled">{{ row.station }}</td>
    <td class="time" :class="{ header: isHeader }" v-if="columns.find(col => col.id === 'time').enabled">{{ row.time }}</td>
    <td class="old" :class="{ header: isHeader }" v-if="columns.find(col => col.id === 'old').enabled">{{ row.old }}</td>
    <td class="floor" :class="{ header: isHeader }" v-if="columns.find(col => col.id === 'floor').enabled">{{ row.floor }}</td>
    <td class="layout" :class="{ header: isHeader }" v-if="columns.find(col => col.id === 'layout').enabled">{{ row.layout }}</td>
    <td class="size" :class="{ header: isHeader }" v-if="columns.find(col => col.id === 'size').enabled">{{ row.size }}</td>
    <td class="rent" :class="{ header: isHeader }" v-if="columns.find(col => col.id === 'rent').enabled">{{ row.rent }}</td>
    <td class="autolock" :class="{ header: isHeader }" v-if="columns.find(col => col.id === 'autolock').enabled">{{ row.autolock }}</td>
    <td class="delibox" :class="{ header: isHeader }" v-if="columns.find(col => col.id === 'delibox').enabled">{{ row.delibox }}</td>
    <td class="sepbath" :class="{ header: isHeader }" v-if="columns.find(col => col.id === 'sepbath').enabled">{{ row.sepbath }}</td>
    <td class="custom_1" :class="{ header: isHeader }" v-if="columns.find(col => col.id === 'custom_1').enabled">{{ row.custom_1 }}</td>
    <td class="custom_2" :class="{ header: isHeader }" v-if="columns.find(col => col.id === 'custom_2').enabled">{{ row.custom_2 }}</td>
    <td>
      <div v-if="isHeader">
        <button @click="showConditionModal()">edit</button>
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
    },
    showConditionModal() {
      this.$modal.show("edit-condition")
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
  padding: 8px 1vw 8px 1vw;
}

tr.list-row {
  background-color: #fdde83;
}

.name{
  min-width:80px;
}
.ward{
  min-width:80px;
}
.line{
  min-width:90px;
}
.station{
  min-width:90px;
}
.time{
  min-width:50px;
}
.old{
  min-width:50px;
}
.floor{
  min-width:50px;
}
.layout{
  min-width:90px;
}
.size{
  min-width:90px;
}
.rent{
  min-width:50px;
}
.autolock{
  min-width:50px;
}
.delibox{
  min-width:50px;
}
.sepbath{
  min-width:100px;
}
.custom_1{
  min-width:50px;
}
.custom_2{
  min-width:50px;
}

</style>
