<template>
  <div id="app">
    <onnx-test-component/>
  </div>
</template>

<script>
import OnnxTestComponent from "./components/OnnxTestComponent.vue"

export default {
  name: 'App',
  components: {
    OnnxTestComponent
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
