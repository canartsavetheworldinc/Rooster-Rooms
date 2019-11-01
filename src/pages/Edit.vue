<template>
  <div>
    <div>{{ data }}</div>
    <List />
    <AddButton :clicked="showAddListItemModal">add item</AddButton>
    <ListItemModal />
  </div>
</template>

<script>
import List from '../components/List'
import AddButton from '../components/AddButton'
import ListItemModal from '../components/ListItemModal'

export default {
  props: {
    data: {
      type: String,
      required: false
    }
  },
  components: {
    List,
    AddButton,
    ListItemModal
  },
  methods: {
    showAddListItemModal() {
      this.$store.dispatch("setFormRegisterEvent", this.addItem)
      this.$modal.show("edit-list-item")
    },
    addItem() {
      let id = 0
      for(const row of this.$store.getters.getList) {
        if(row.id > id) {
          id = row.id
        }
      }
      this.$store.dispatch('addListItem', {
        id: ++id,
        name: this.formdata.name,
        rent: this.formdata.rent
      })
      this.$store.dispatch("clearForm")
      this.$modal.hide("edit-list-item")
    }
  },
  computed: {
    formdata() {
      return this.$store.getters.getFormdata
    }
  }
}
</script>

<style scoped>
</style>
