const Vue = window.Vue
export default {
  namespaced: true,
  state: {
    logouting: false,
    login: false
  },
  mutations: {
    // 登陆成功保存信息
    login (state, data) {
      state.logouting = false
      state.login = true
      localStorage.setItem('token', data.token)
      Vue.http.headers.common['token'] = data.token
    },
    // 退出登陆清除信息
    logout (state) {
      state.logouting = true
      state.login = false
      localStorage.removeItem('token')
    },
  }
}
