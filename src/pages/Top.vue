<template>
  <div id="main">
  
    <!--
    <div class="image-wrapper">
      <img alt="Vue logo" src="../assets/logo.png">
    </div>
    -->
    <!-- <div class="left-corner">
    </div>-->

    <div class="title-wrapper">
      <h1>Rooster Rooms</h1>
      <div class="subtitle">お部屋比較サイト</div>
    </div>

    <div class="description"><p><span>気になるお部屋の情報を</span><span>カンタンに比較できます</span></p></div>

    <div class="selections-wrapper">

      <router-link to="/edit" class="link selection1">

        <div id="selection" class>
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

/*.left-corner{
  position: absolute;
  top: 20%;
  left: 10%;
  width: 25%;
  height: 60px;
  z-index: -1;
  background-color: #f08A37;
}*/


#main{
  margin: 0;
  width: 100vw;
  height: 100%;
}

.title-wrapper{
  width: 80%;
  height: 30%;
  margin: 10% 10% 0 10%;
}

.title-wrapper h1{
  margin: 0 auto;
  font-size: calc(3.4rem + ((2vw - 0.64rem) * 2.1429));
}

.subtitle{
  font-size: calc(2rem + ((1vw - 0.64rem) * 2.1429));
}

.description{
  width: 80%;
  margin: 1% 10% 5% 10%;
  font-size: calc(1.4rem + ((0.5vw - 0.64rem) * 2.1429));
}

.selections-wrapper{
  width:80%;
  height: auto;
  margin: 0% 10% 7% 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

#selection{
  width: 28vw;
  height: 20%;
  border: solid;
  color: black;
}

.selection1{
  margin-right: 5%;
  background-color: #d56950;
}

:hover.selection1{
  transition: 500ms;
  transform: rotate(2deg);
}

.selection2{
  margin-left: 5%;
  background-color: #89A3D3;
}

:hover.selection2{
  transition: 500ms;
  transform: rotate(2deg);
}

.largetext{
    font-size: calc(2rem + ((1vw - 0.64rem) * 2.1429));
}

.smalltext{
  font-size: calc(1.4rem + ((0.5vw - 0.64rem) * 2.1429));
}

.link{
  text-decoration: none;
}

</style>
