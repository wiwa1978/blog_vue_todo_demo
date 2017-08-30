import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Add from '@/components/Add'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: 'About', component: About },
    { path: '/add', name: 'Add', component: Add },
  ]
})
