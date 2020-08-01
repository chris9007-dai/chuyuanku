import Vue from 'vue'
import VueRouter from 'vue-router'

import main from '../components/main.vue'
import register from '../components/register.vue'
import test from '../components/test.vue'

Vue.use(VueRouter)

const router = new VueRouter({
 /*  mode: 'hash', */
  routes: [
    { path: '/', redirect: '/test' },
    { path: '/main',component: main },
  /*    { path: '/home', component: home },
    { path: '/login', component: login }, */
    { path: '/register',component: register },
    { path: '/test',component: test }
  ]
})

export default router
