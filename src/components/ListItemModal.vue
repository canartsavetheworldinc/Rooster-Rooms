<template>
	<modal :adaptive="true" width="95%" :max-width="780" height="auto" name="edit-list-item">
    <div class="modal-list-item">
    <ListItemInput class="listitems name" conditionId="name" />
    <ListItemInput class="listitems ward" conditionId="ward" />
    <ListItemInput class="listitems line" conditionId="line" />
    <ListItemInput class="listitems station" conditionId="station" />
    <ListItemInput class="listitems time" conditionId="time" />
    <ListItemInput class="listitems old" conditionId="old" />
    <ListItemInput class="listitems floor" conditionId="floor" />
    <ListItemInput class="listitems layout" conditionId="layout" />
    <ListItemInput class="listitems size" conditionId="size" />
    <ListItemInput class="listitems rent" conditionId="rent" />
    <ListItemInput class="listitems autolock" conditionId="autolock" />
    <ListItemInput class="listitems delibox" conditionId="delibox" />
    <ListItemInput class="listitems sepbath" conditionId="sepbath" />
    <ListItemInput class="listitems custom_1" conditionId="custom_1" />
    <ListItemInput class="listitems custom_2" conditionId="custom_2" />
    </div>
    <button class="okey" @click="onRegister()">ok!</button>
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

.modal-list-item{
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  display: flex;
  flex-wrap: wrap;
  font-size: 16px;
}

.listitems{
  width: 34%;
  margin: 2% 4% 2% 10%;
}

.listitems span{
  font-size: calc(1.2rem + ((0.4vw - 0.54rem)));
}

.okey{
  margin: 0% 45% 2% 45%;
  width: 10%;
  border-radius: 0%;
  border-collapse: collapse;
  border-spacing: 0;
}

</style>
