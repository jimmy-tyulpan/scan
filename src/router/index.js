import Vue from 'vue'
import Router from 'vue-router'
import Scan from '../components/ui/Scan.vue'
import ScanResult from '../components/ui/ScanResult.vue'

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
      props: (route) => ({
        query: route.query.data
      }),
      component: ScanResult
    },
    {
      path: '*',
      component: Scan
    }
  ]
})
