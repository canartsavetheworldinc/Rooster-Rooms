<template>
  <div>
    <div>edit</div>
    <div>{{ data }}</div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: String,
      required: false
    }
  }
}
</script>

<style>
</style>
