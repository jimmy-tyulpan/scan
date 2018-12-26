import Vue from 'vue'
import Router from 'vue-router'
import Scan from '../components/ui/Scan.vue'
import ScanResult from '../components/ui/ScanResult.vue'
import store from '../store/index.js'
import Login from '../components/ui/Login.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/scan',
      alias: '/',
      component: Scan
    },
    {
      path: '/login',
      alias: 'login',
      component: Login
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
      redirect: to => {
        return '/scan'
      }
    }
  ]
})

router.beforeResolve((to, from, next) => {
  if (!localStorage.getItem('token') && to.path !== '/login') {
    next({path: '/login'})
  } else if (localStorage.getItem('token') && to.path === '/login') {
    next({path: '/'})
  } else {
    next()
  }
})

export default router
