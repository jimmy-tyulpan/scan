import Vue from 'vue'
import Router from 'vue-router'
import Scan from '../components/ui/Scan.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/scan',
      component: Scan
    }
  ]
})
