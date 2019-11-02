<template>
	<modal name="edit-list-item">
    <ListItemInput conditionId="name" />
    <ListItemInput conditionId="ward" />
    <ListItemInput conditionId="line" />
    <ListItemInput conditionId="station" />
    <ListItemInput conditionId="time" />
    <ListItemInput conditionId="old" />
    <ListItemInput conditionId="floor" />
    <ListItemInput conditionId="layout" />
    <ListItemInput conditionId="size" />
    <ListItemInput conditionId="rent" />
    <ListItemInput conditionId="autolock" />
    <ListItemInput conditionId="delibox" />
    <ListItemInput conditionId="sepbath" />
    <ListItemInput conditionId="custom_1" />
    <ListItemInput conditionId="custom_2" />
    <button @click="onRegister()">ok!</button>
  </modal>
</template>

<script>
import ListItemInput from "./ListItemInput"

export default {
  components: {
    ListItemInput
  },
  computed: {
    formdata: {
      get() {
        return this.$store.state.formdata
      },
      set(value) {
        this.$store.dispatch("setFormdata", value)
      }
    },
    onRegister() {
      return this.$store.getters.onFormRegister
    },
    columns() {
      return this.$store.getters.getColumns
    }
  }
}
</script>

<style scoped>
</style>
