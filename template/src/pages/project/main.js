// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/filters'
import store from './store'
import router from './router'
import Root from './components/root'
import VueResource from 'vue-resource'
import '../../styl/global.styl'
const Vue = window.Vue
{{#ECharts}}
const echarts = window.echarts
Vue.prototype.$echarts = echarts
{{/ECharts}}

Vue.use(VueResource)

// 如果本地有token则设置
if (localStorage.token) {
  Vue.http.headers.common['token'] = localStorage.token
}

// 401处理
Vue.http.interceptors.push((request, next) => {
  next((response) => {
    // token 过期
    if (response.status === 401) {
    }
  })
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { Root },
  template: '<Root/>'
})
