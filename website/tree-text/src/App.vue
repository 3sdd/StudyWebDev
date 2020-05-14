<template>
  <div id="app">
    <PageHeader/>
    <router-view/>
    <PageFooter/>
  </div>
</template>

<script>
import PageHeader from "./components/global/PageHeader.vue"
import PageFooter from "./components/global/PageFooter.vue"

export default {
  name: 'App',
  components: {
    PageHeader,
    PageFooter,
    
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
}
</style>
