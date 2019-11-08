<template>
	<modal name="edit-condition"
  height="400px"
  width="70%">
    <div class="modal-condition">
      <Item v-for="column in columns" :key="column.id" :column="column" />
    </div>
    <router-link to="/edit">完了！</router-link>
	</modal>
</template>

<script>
import Item from "./ConditionItem"

export default {
  components: {
    Item
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
