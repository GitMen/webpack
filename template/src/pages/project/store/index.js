import Vuex from 'vuex'
import account from './account'
const Vue = window.Vue

Vue.use(Vuex)

var store = new Vuex.Store({
  modules: {
    account
  },
})

export default store
