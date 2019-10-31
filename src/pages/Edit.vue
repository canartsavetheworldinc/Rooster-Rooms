<template>
  <div>
    <div>edit</div>
    <div>{{ data }}</div>
    <List />
    <AddButton :clicked="showAddListItemModal">add item</AddButton>
    <modal name="add-list-item">
      <button @click="addItem()">ok!</button>
    </modal>
  </div>
</template>

<script>
import List from '../components/List'
import AddButton from '../components/AddButton'

export default {
  props: {
    data: {
      type: String,
      required: false
    }
  },
  components: {
    List,
    AddButton
  },
  methods: {
    showAddListItemModal() {
      this.$modal.show('add-list-item')
    },
    addItem() {
      let id = 0
      for(const row of this.$store.getters.getList) {
        if(row.id > id) {
          id = row.id
        }
      }
      const dummy = {
        id: ++id,
        name: "hoge",
        rent: 11
      }
      this.$store.dispatch('addListItem', dummy)
    }
  }
}
</script>

<style scoped>
</style>
