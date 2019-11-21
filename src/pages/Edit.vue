<template>
  <div>
    <div>{{ data }}</div>
    <div class="list-wrapper">
    <List />
    </div>
    <AddButton :clicked="showAddListItemModal">add item</AddButton>
    <ListItemModal />
    <ConditionModal />
  </div>
</template>

<script>
import List from '../components/List'
import AddButton from '../components/AddButton'
import ListItemModal from '../components/ListItemModal'
import ConditionModal from '../components/ConditionModal'

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
    ListItemModal,
    ConditionModal
  },
  methods: {
    showAddListItemModal() {
      this.$store.dispatch("clearForm")
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
      this.$store.dispatch("addListItem", {
        id: ++id,
        ...this.formdata
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

.list-wrapper{
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  margin: 0 0 0 5vw;
}

</style>
