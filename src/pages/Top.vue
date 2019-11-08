<template>
  <div id="main">
  
    <!--
    <div class="image-wrapper">
      <img alt="Vue logo" src="../assets/logo.png">
    </div>
    -->

    <div class="title-wrapper">
      <h1>Rooster Rooms</h1>
      <div class="subtitle">お部屋比較サイト</div>
    </div>

    <div class="description">気になるお部屋の情報をカンタンに比較できます</div>

    <div class="selections-wrapper">

      <router-link to="/edit" class="link selection1">

        <div id="selection">
          <p>
            <span class="largetext">ただいま</span><br>
            <span class="smalltext">使い方は知っています</span>
          </p>
        </div>

      </router-link>

      <router-link to="/introduction" class="link selection2">

        <div id="selection">
          <p>
            <span class="largetext">はじめまして</span><br>
            <span class="smalltext">新規ユーザーです</span>
          </p>
        </div>

      </router-link>
    </div>

  </div>

</template>

<script>
export default {
}
</script>

<style scoped>

#main{
  margin: 0;
  width: 100vw;
  height: auto;
}

.title-wrapper{
  width: 80%;
  height: 30%;
  margin: 15% 10% 0 10%;
}

.title-wrapper h1{
  margin: 0 auto;
  font-size: 100px;
}

.subtitle{
  font-size: 28px;
}

.description{
  width: 80%;
  margin: 5% 10% 5% 10%;
}

.selections-wrapper{
  width:80%;
  height: auto;
  margin: 0% 10% 0 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

#selection{
  width: 300px;
  height: 20%;
  border: solid;
}

.selection1{
  margin-right: 5%;
}

.selection2{
  margin-left: 5%;
}

.largetext{
  font-size: 40px;
}

.smalltext{
  font-size: 14px;
}

.link{
  text-decoration: none;
}

</style>
