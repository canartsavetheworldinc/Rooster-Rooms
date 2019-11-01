<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Rooster Rooms</h1>
    <div>お部屋比較サイト</div>
    <div>気になるお部屋の情報をカンタンに比較できます</div>
    <div>
      <router-link to="/condition">
        <div>ただいま</div>
        <small>使い方は知っています</small>
      </router-link>
      <router-link to="/introduction">
        <div>はじめまして</div>
        <small>新規ユーザーです</small>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
</style>
