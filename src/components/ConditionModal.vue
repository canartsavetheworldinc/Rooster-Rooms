<template>
	<modal :adaptive="true" width="95%" :max-width="780" height="auto" name="edit-condition">
    <div class="modal-condition">
      <Item v-for="column in columns" :key="column.id" :column="column" />
    </div>
    <button class="button" @click="done">完了！</button>
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
  justify-content: flex-start;
  align-items: center;
  align-content: space-around;
  display: flex;
  flex-wrap: wrap;
  font-size: 16px;
  overflow-y: scroll;
}

.button{
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 2%;
  width: 80px;
}
</style>
