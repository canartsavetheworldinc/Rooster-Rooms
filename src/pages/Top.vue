<template>
  <div id="main">

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
  color: #f1f8f7;
}

.subtitle{
  font-size: calc(2rem + ((1vw - 0.64rem) * 2.1429));
  color: #265782;
}

.description{
  width: 80%;
  margin: 1% 10% 5% 10%;
  font-size: calc(1.4rem + ((0.5vw - 0.64rem) * 2.1429));
  color: #265782;
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

.popup{
  z-index: -1;
  position: absolute;
}

#selection{
  width: 28vw;
  height: 20%;
  border: solid;
  border-color: #fdde83;
  background-color: #fdde83;
  color: #7d7f7f;
  z-index: 0;
  position: relative;
  transition: 0.6s;
}

:hover#selection{
  transition: 0.5s;
  transform: rotate(2.5deg);
}

.selection1{
  margin-right: 5%;
  background-color: #d56950;
  transition: 0.3s;
}

:hover.selection1{
  transition: 500ms;
  transform: rotate(2deg);
}

.selection2{
  margin-left: 5%;
  background-color: #d56950;
  transition: 0.3s;
}

:hover.selection2{
  transition: 500ms;
  transform: rotate(2deg);
}

.largetext{
    font-size: calc(1.8rem + ((1vw - 0.64rem) * 2.1429));
}

.smalltext{
  font-size: calc(1.4rem + ((0.5vw - 0.64rem) * 2.1429));
}

.link{
  text-decoration: none;
}

@media screen and (max-width: 896px){
  .title-wrapper h1{
    font-size: calc(2.8rem + ((2vw - 0.64rem) * 2.1429));
  }

  .subtitle{
      font-size: calc(2.3rem + ((1vw - 0.64rem) * 2.1429));
  }

  .description p{
    font-size: calc(2.3rem + ((0.5vw - 0.67rem) * 2.1));
  }

  .largetext{
    font-size: calc(1.8rem + ((1vw - 0.64rem) * 2.1429));
}

.smalltext{
  font-size: calc(1.7rem + ((0.5vw - 0.64rem) * 2.1429));
}

#selection{
  width: 34vw;
}

}
@media screen and (max-width: 896px){
    .description p{
    font-size: calc(2rem + ((0.5vw - 0.67rem) * 2.1));
  }
}

</style>
