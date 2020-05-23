<template>
  <div id="app">
    <Html2Canvas />
    <button>hi</button>
  </div>
</template>

<script>
import Html2Canvas from './components/Html2Canvas.vue'

export default {
  name: 'App',
  components: {
    Html2Canvas
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
  margin-top: 60px;
}
</style>
