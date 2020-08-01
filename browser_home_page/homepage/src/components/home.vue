<template>
  <div :class="{'login_container':true}">
    <main>
      <input
        type="button"
        id="type"
        :value="lists[index]"
        @click="change"
        :style="{backgroundColor:color[index]}"
      />
      <input type="text" id="content" placeholder="请输入内容" v-model="content" @keypress="enter" />
      <input type="button" id="search" value="Go" @click="search" />
    </main>
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
main {
  position: absolute;
  width: 50%;
  height: 40px;
  border: 2px solid black;
  border-radius: 30px;
  outline: none;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
}
#type {
  width: 10%;
  height: 100%;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 30px 0 0 30px;
}
#content {
  position: absolute;
  width: 90%;
  height: 100%;
  padding: 0;
  border: none;
  outline: none;
  border-radius: 0 30px 30px 0;
}
#search {
  position: absolute;
  float: right;
  width: 10%;
  height: 100%;
  right: 0;
  border: none;
  outline: none;
  border-radius: 30px;
  font-size: 14px;
  color: blue;
  cursor: pointer;
  background-color: white;
  &:hover {
    background-color: lightskyblue;
  }
}
</style>
