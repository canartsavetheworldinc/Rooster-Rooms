<template>
	<div v-if="isShow">
    <span>{{ column.name }}: </span>
    <input :type="inputType" v-model="formdata" v-if="true" />
  </div>
</template>

<script>
export default {
  props: {
    conditionId: {
      type: String,
      required: true
    }
  },
  computed: {
    type() {
      return this.column.type
    },
    isShow() {
      if(this.conditionId === "name") {
        return true
      }
      const columns = this.$store.getters.getColumns
      return columns.find(col => col.id === this.conditionId).enabled
    },
    column() {
      return this.$store.getters.getColumns.find(col => col.id === this.conditionId)
    },
    formdata: {
      get() {
        return this.$store.state.formdata[this.conditionId]
      },
      set(value) {
        const payload = {}
        payload[this.conditionId] = value
        this.$store.dispatch("setFormdata", payload)
      }
    },
    inputType: {
      get() {
        switch(this.type) {
          case String:
            return "text"
          case Number:
            return "number"
          case Boolean:
            return "checkbox"
          default:
            return "text"
        }
      }
    }
  }
}
</script>

<style scoped>
</style>
