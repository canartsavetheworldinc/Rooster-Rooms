<template>
	<modal name="edit-list-item">
    <div v-if="true">
      <span>name:</span>
      <input type="text" v-model="formdata.name" v-if="true" />
    </div>
    <div v-if="columns.find(col => col.id === 'ward').enabled">
      <span>ward:</span>
      <input type="text" v-model="formdata.ward" />
    </div>
    <div v-if="columns.find(col => col.id === 'line').enabled">
      <span>line:</span>
      <input type="text" v-model="formdata.line" />
    </div>
    <div v-if="columns.find(col => col.id === 'station').enabled">
      <span>station:</span>
      <input type="text" v-model="formdata.station" />
    </div>
    <div v-if="columns.find(col => col.id === 'time').enabled">
      <span>time:</span>
      <input type="number" v-model="formdata.time" />
    </div>
    <div v-if="columns.find(col => col.id === 'old').enabled">
      <span>old:</span>
      <input type="number" v-model="formdata.old" />
    </div>
    <div v-if="columns.find(col => col.id === 'floor').enabled">
      <span>floor:</span>
      <input type="number" v-model="formdata.floor" />
    </div>
    <div v-if="columns.find(col => col.id === 'layout').enabled">
      <span>layout:</span>
      <input type="text" v-model="formdata.layout" />
    </div>
    <div v-if="columns.find(col => col.id === 'size').enabled">
      <span>size:</span>
      <input type="number" v-model="formdata.size" />
    </div>
    <div v-if="columns.find(col => col.id === 'rent').enabled">
      <span>rent:</span>
      <input type="number" v-model="formdata.rent" />
    </div>
    <div v-if="columns.find(col => col.id === 'autolock').enabled">
      <span>autolock:</span>
      <input type="checkbox" v-model="formdata.autolock" />
    </div>
    <div v-if="columns.find(col => col.id === 'delibox').enabled">
      <span>delibox:</span>
      <input type="checkbox" v-model="formdata.delibox" />
    </div>
    <div v-if="columns.find(col => col.id === 'sepbath').enabled">
      <span>sepbath:</span>
      <input type="checkbox" v-model="formdata.sepbath" />
    </div>
    <div v-if="columns.find(col => col.id === 'custom_1').enabled">
      <span>custom_1:</span>
      <input type="text" v-model="formdata.custom_1" />
    </div>
    <div v-if="columns.find(col => col.id === 'custom_2').enabled">
      <span>custom_2:</span>
      <input type="text" v-model="formdata.custom_2" />
    </div>
    <button @click="onRegister()">ok!</button>
  </modal>
</template>

<script>
export default {
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
