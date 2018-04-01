<template>
  <div id="titleBar">
    <h1>^</h1>
  </div>
</template>

<script>
export default {
  name: 'titleBar'
}
</script>

<style scoped>
  h1{
    color: #20cb9a;
    text-align: left;
    margin: 0 40px;
    font-size: 50pt;
  }
  #titleBar{
    height: 100px;
    width: 100%;
    background-color: #1b2b3a;
    position: absolute;
    top: 0;
    left: 0;
    margin-bottom: 300px;
  }
</style>
