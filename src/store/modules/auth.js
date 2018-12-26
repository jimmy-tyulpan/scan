import axios from 'axios'
import router from '../../router/index.js'
import i18n from '../../i18n/index.js'

const RESPONSE_SUCCESS = true
const URL = 'http://localhost:3000/login'

export default {
  state: {
    isLoggedIn: false
  },
  errors: {
    response: null
  },
  actions: {
    login (context, payload) {
      axios
        .post(URL, {login: payload.login, password: payload.password})
        .then(response => {
          if (response.data.success === RESPONSE_SUCCESS && response.data.token) {
            context.commit('setIsLoggedIn', response.data)
            router.push('scan')
          } else {
            alert(i18n.t('notify.invalid'))
          }
        }).catch(e => {
          alert(e)
        })
    }
  },
  mutations: {
    setIsLoggedIn (state, payload) {
      state.isLoggedIn = true
      localStorage.setItem('token', payload.token)
    },
    unLogin (state, payload) {
      state.isLoggedIn = false
      localStorage.removeItem('token')
      router.push('/login')
    }
  },
  getters: {
    isLoggedIn: state => state.isLoggedIn || localStorage.getItem('token')
  }
}
