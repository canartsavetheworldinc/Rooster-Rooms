<template>
  <div>
    <div class="list-wrapper">
      <List />
    </div>
    <AddButton :clicked="showAddListItemModal">お部屋を追加する</AddButton>
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
    },
    token() {
      return this.$store.getters.getToken
    }
  },
  watch: {
    data() {
      this.$store.dispatch("decodeToken", this.data)
    },
    token() {
      // console.log(this.token)
      location.hash = `#/edit/${this.token}`
    }
  },
  beforeMount() {
    this.$store.dispatch("decodeToken", this.data)
  }
}
</script>

<style scoped>

.list-wrapper{
  margin: 0 auto;
  width: auto;
  display: flex;
  /* flex-wrap: nowrap; */
  justify-content: flex-start;
  overflow-x: scroll;
}

@media screen and (max-width: 896px){
  .list-wrapper{
    width: 90vw;
  }
}

</style>
