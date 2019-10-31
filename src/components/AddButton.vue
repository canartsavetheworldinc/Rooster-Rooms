<template>
  <button @click="clicked">
    <slot></slot>
  </button>
</template>

<script>
export default {
	props: {
    clicked: {
      type: Function,
      required: true
    }
	}
}
</script>

<style scoped>
</style>
