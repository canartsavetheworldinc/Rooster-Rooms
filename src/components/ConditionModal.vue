<template>
	<modal height="auto" name="edit-condition">
    <div>
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
</style>
