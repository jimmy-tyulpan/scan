import Vue from 'vue'
import Router from 'vue-router'
import Scan from '../components/ui/Scan.vue'
import ScanResult from '../components/ui/ScanResult.vue'
import store from '../store/modules/qr.js'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/scan',
      component: Scan
    },
    {
      path: '/result',
      component: ScanResult,
      beforeEnter: (to, from, next) => {
        if (!store.getters.getCode) {
          next('/scan')
        } else {
          next()
        }
      }
    },
    {
      path: '*',
      beforeEnter: (to, from, next) => {
        next('/scan')
      }
    }
  ]
})
