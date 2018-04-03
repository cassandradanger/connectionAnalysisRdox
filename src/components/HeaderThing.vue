<template>
  <div id="titleBar">
    <h1>^</h1>
    <h3>Healthcare Connections</h3>
  </div>
</template>

<script>
export default {
  name: 'titleBar'
}
</script>

<style scoped>
  h1, h3{
    color: #20cb9a;
    text-align: left;
    display: inline;
  }

  h1{
    font-size: 45pt;
    margin: 20px 0 -10px 30px;
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
