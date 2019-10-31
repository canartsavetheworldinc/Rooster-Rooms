<template>
  <div>
    <div>edit</div>
    <div>{{ data }}</div>
    <List :list="list" />
  </div>
</template>

<script>
import List from '../components/List'

export default {
  props: {
    data: {
      type: String,
      required: false
    }
  },
  components: {
    List
  },
  computed: {
    list() {
      return this.$store.getters.getList
    }
  }
}
</script>

<style scoped>
</style>
