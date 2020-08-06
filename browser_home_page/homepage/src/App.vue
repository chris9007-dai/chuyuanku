<template>
  <div id="app">
    <router-view></router-view>
    <br>
    <strong><hr></strong>
    <footer>
      <div class="footNote"><p><span> Copyright </span><span>©</span><span> 2017 </span> blog <span>By Chris</span><span></span></p>
      <br>
      <p>粤ICP备20044632号</p></div>
    </footer>
  </div>
</template>
<script>
</script>
<style lang="less" scoped>
footer{
  display: flex;
  justify-content: center;
  text-align: center; 
  bottom: 0;
  width: 100%;
  background-color: white;
}
</style>
