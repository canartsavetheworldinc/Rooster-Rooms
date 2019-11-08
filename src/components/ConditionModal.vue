<template>
<<<<<<< HEAD
	<modal height="auto" name="edit-condition">
    <div>
=======
	<modal name="edit-condition"
  height="400px"
  width="70%">
    <div class="modal-condition">
>>>>>>> 作業途中
      <Item v-for="column in columns" :key="column.id" :column="column" />
    </div>
    <button @click="done">完了！</button>
	</modal>
</template>

<script>
import Item from "./ConditionItem"

export default {
  components: {
    Item
  },
  methods: {
    done() {
      this.$modal.hide("edit-condition")
    }
  },
  computed: {
    columns() {
      return this.$store.getters.getColumns.filter(col => col.id !== "name")
    }
  }
}
</script>

<style scoped>
.modal-condition{
  justify-content: space-around;
  align-items: center;
  align-content: space-around;
  display: flex;
  flex-wrap: wrap;
  font-size: 16px;
}
</style>
