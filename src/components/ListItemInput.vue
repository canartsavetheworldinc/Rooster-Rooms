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
          case "string":
            return "text"
          case "number":
            return "number"
          case "boolean":
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

.listitems span{
  width: 0%;
  margin: 0;
  font-size: calc(1rem + ((0.4vw - 0.54rem)));
}

.listitems input:not([type="checkbox"]){
  width: 60%;
  margin: 0;
}

@media screen and (max-width: 480px){
  .listitems input:not([type="checkbox"]){
  width: 40%;
  margin: 0;
}
  .listitems span{
    width: 0%;
    margin: 0;
    font-size: 14px;
  }
}

</style>
