<template>
  <div>
    <ListRow v-for="(row, i) in list" :key="i" :row="row" />
  </div>
</template>

<script>
import ListRow from './ListRow'

export default {
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  components: {
    ListRow
  }
}
</script>

<style>
</style>
