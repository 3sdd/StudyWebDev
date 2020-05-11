<template>
  <div id="app">
    <PageHeader siteName="ベクトル計算" id="header"/>
    <div id="contents">
      <h1>2次元ベクトル計算</h1>
      <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
      <VectorInputs></VectorInputs>
      <VectorCalculation></VectorCalculation>
      <!-- <HelloWorld msg="Welcome to Your Vue.js App hello hello"/> -->
      
    </div>


  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import PageHeader from "./components/PageHeader.vue"
import VectorInputs from "./components/VectorInputs.vue"
import VectorCalculation from "./components/VectorCalculation"

export default {
  name: 'App',
  components: {
    PageHeader,
    VectorInputs,
    VectorCalculation
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  padding:0;
  margin:0;
  width: 100%;
}


/* なんでこれないと余白ができるのか？
https://teratail.com/questions/184961*/
*{
  margin:0;
}

#header{
  margin-bottom: 30px;
}

#contents{

    width: 800px;
    margin:auto;
    background: whitesmoke;
    border-radius: 15px;

}
</style>
