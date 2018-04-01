import Vue from 'vue'
import Router from 'vue-router'
import ConnectionList from '@/components/ConnectionList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ConnectionList',
      component: ConnectionList
    }
  ]
})
