import Vue from 'vue'
import VueRouter from 'vue-router'

import main from '../components/main.vue'
/* import register from '../components/register.vue' */
import blog from '../components/blog.vue'

Vue.use(VueRouter)

const router = new VueRouter({
 /*  mode: 'hash', */
  routes: [
    { path: '/', redirect: '/main' },
    { path: '/main',component: main },
 /*     { path: '/home', component: home }, */
/*     { path: '/login', component: login }, */
    { path: '/blog',component: blog }
  ]
})

export default router
