<template>
  <div :class="{'login_container':true}">
     <el-row :gutter="10" class="main">
          <el-col :xs="3"><input
        type="button"
        id="type"
        :value="lists[index]"
        @click="change"
        :style="{backgroundColor:color[index]}"
      /></el-col>
      <el-col :xs="18"><input type="text" id="content" placeholder="请输入内容" v-model="content" @keypress="enter" /></el-col>
      <el-col :xs="3"><input type="button" id="search" value="Go" @click="search" /></el-col>
    </el-row>
    <!-- <main>
      
      
      
    </main> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: ['百度', 'csdn', 'B站'],
      color: ['royalblue', 'red', 'chocolate'],
      index: 0,
      display: true,
      content: '',
    }
  },
  methods: {
    change() {
      if (
        this.index < this.lists.length - 1 &&
        this.index < this.color.length - 1
      ) {
        this.index += 1
      } else {
        this.index = 0
      }
    },
    search() {
      switch (this.index) {
        case 0:
          window.open('https://www.baidu.com/s?wd=' + this.content, '_blank')
          break
        case 1:
          window.open(
            'https://so.csdn.net/so/search/s.do?q=' + this.content,
            '_blank'
          )
          break
        case 2:
          window.open(
            'https://search.bilibili.com/all?keyword=' + this.content,
            '_blank'
          )
          break
      }
    },
    enter(e) {
      if (e.keyCode === 13) {
        this.search()
      }
    },
  },
}
</script>

<style lang="less" scoped>
.login_container {
  position: fixed;
  z-index: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(125deg, #00ff00, #a20055, #77ffee);
  background-size: 400%;
  animation: bganimation 15s infinite;
  z-index: 1;
}
@keyframes bganimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

</style>