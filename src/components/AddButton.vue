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
button{
  margin-top: 2%;
  width: 10vw;
  min-width: 100px;
  height: 2vw;
  min-height: 30px;
  border-radius: 0%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: calc(0.6rem + ((1vw - 0.8rem)));
  color: rgb(65, 65, 65);
  background-color: rgb(252, 252, 252);
}

</style>
