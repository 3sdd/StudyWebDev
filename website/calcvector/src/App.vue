<template>
  <div id="app">
    <PageHeader siteName="ベクトル計算" id="header"/>
    <div id="contents">
      <h1>2次元ベクトル計算</h1>
      <p id="content-description">
        2つのベクトル(ベクトルa,ベクトルb)の成分の計算が出来ます。
        元のベクトルと計算結果のベクトルがグラフに表示されます。
      </p>
      <VectorInputs></VectorInputs>
      <VectorCalculation id="result"></VectorCalculation>
      
    </div>


  </div>
</template>

<script>
import PageHeader from "./components/PageHeader.vue"
import VectorInputs from "./components/VectorInputs.vue"
import VectorCalculation from "./components/VectorCalculation"

export default {
  name: 'App',
  components: {
    PageHeader,
    VectorInputs,
    VectorCalculation
  },
  created:function(){
    this.$ga.page("/");
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
  font-size: 25px;
}

h1{
  padding-top:20px;
  padding-bottom:10px;
  border-bottom: solid 10px purple;
}

#content-description{
  margin-top:10px;
  margin-bottom:20px;
  padding:5px 50px;
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
    padding: 20px 20px;
    padding-bottom: 50px;
    margin-bottom: 100px;
}

</style>
