<template>
  <div id="app">
    <header-thing></header-thing>
    <router-view/>
  </div>
</template>

<script>
import HeaderThing from './components/HeaderThing';

export default {
  name: 'App',
  components: {
    HeaderThing,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
