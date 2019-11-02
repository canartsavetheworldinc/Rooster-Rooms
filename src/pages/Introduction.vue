<template>
	<div>
    <div>Introduction</div>
    <router-link to="/edit">了解！</router-link>
  </div>
</template>

<script>
export default {
  destroyed() {
    this.$modal.show("edit-condition")
  }
}
</script>

<style scoped>
</style>
