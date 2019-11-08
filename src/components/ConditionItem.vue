<template>
	<div>
		<input type="checkbox" v-model="enabled" />
    <span v-if="isCustom" class="items">
      <input type="text" v-model="customName">
    </span>
		<span v-else>{{ column.name }}</span>
	</div>
</template>

<script>
export default {
  props: {
    column: {
      type: Object,
      required: true
    }
  },
  computed: {
    enabled: {
      get() {
        return this.$store.getters.getColumns.find(col => col.id === this.column.id).enabled
      },
      set(value) {
        this.$store.dispatch("changeColumnAvailability", {
          id: this.column.id,
          enabled: value
        })
      }
    },
    customName: {
      get() {
        return this.$store.getters.getColumns.find(col => col.id === this.column.id).name
      },
      set(value) {
        this.$store.dispatch("changeCustomColumnName", {
          id: this.column.id,
          name: value
        })
      }
    },
    isCustom() {
      return this.column.id.indexOf("custom_") > -1
    }
  }
}
</script>

<style scoped>
.items{
  width: 200px;
}
</style>
