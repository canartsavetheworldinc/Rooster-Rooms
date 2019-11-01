<template>
	<div>
    <div>
      <Item v-for="column in columns" :key="column.id" :column="column" />
    </div>
    <router-link to="/edit">完了！</router-link>
	</div>
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
</style>
