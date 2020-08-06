<template>
  <el-container>
    <el-header>
      <div class="personal">
        <img src="../assets/img/girl.jpg" alt />
      </div>
      <el-button type="primary" round class="login_button" @click="show">登录</el-button>
      <el-button type="primary" round class="login_button" @click="$router.push('/blog')">博客</el-button>
    </el-header>
    <el-main>
      <home></home>
      <login :class="is_login?'showel':'hiddenel'" :show="show"></login>
    </el-main>
  </el-container>
</template>
<script>
import login from './login'
import home from './home'

export default {
  components: {
    home,
    login,
  },
  data() {
    return {
      is_login: false,
    }
  },
  methods: {
    show() {
      this.is_login = !this.is_login
    },
  },
}
</script>
<style lang="less" scoped>
.el-header {
  padding: 10px 0;
  background-color: #373d41;
  .personal {
    float: right;
    height: 40px;
    width: 40px;
    margin-right: 15px;
    background-color: white;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.el-main {
  padding: 0;
}
.login_button {
  float: right;
  margin-right: 15px;
}
.showel {
  display: block;
}
.hiddenel {
  display: none;
}

</style>