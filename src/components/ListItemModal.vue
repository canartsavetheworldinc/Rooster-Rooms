<template>
	<modal name="edit-list-item">
    <input type="text" v-model="formdata.name" />
    <input type="number" v-model="formdata.rent" min="0" />
    <button @click="onRegister()">ok!</button>
  </modal>
</template>

<script>
export default {
  computed: {
    formdata: {
      get() {
        return this.$store.getters.getFormdata
      },
      set(value) {
        this.$store.dispatch("setFormdata", value)
      }
    },
    onRegister() {
      return this.$store.getters.onFormRegister
    }
  }
}
</script>

<style scoped>
</style>
