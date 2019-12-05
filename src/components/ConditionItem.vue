<template>
	<div class="conditionItems">
		<input type="checkbox" v-model="enabled" />
    <span v-if="isCustom">
      <input class="custom" type="text" v-model="customName">
    </span>
		<span class="column" v-else>{{ column.name }}</span>
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

.conditionItems{
  width: 30%;
  margin: 1.5% 1.5% 1% 1.5%;
}

.conditionItems .column{
    font-size: calc(1rem + ((0.4vw - 0.54rem)));
}

.conditionItems .custom{
  width: 70%;
}

</style>
