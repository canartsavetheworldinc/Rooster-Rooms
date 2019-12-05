<template>
  <div>
    <div>{{ data }}</div>
    <div class="list-wrapper">
<<<<<<< HEAD
      <List />
    </div>
    <AddButton :clicked="showAddListItemModal">お部屋を追加する</AddButton>
=======
    <List />
    </div>
    <AddButton :clicked="showAddListItemModal">add item</AddButton>
>>>>>>> 842f5ff133267ada043736d351aa882286b71703
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
<<<<<<< HEAD
  margin: 0 auto;
  width: auto;
  display: flex;
  /* flex-wrap: nowrap; */
  justify-content: flex-start;
  overflow-x: scroll;
=======
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  margin: 0 0 0 5vw;
>>>>>>> 842f5ff133267ada043736d351aa882286b71703
}

</style>
