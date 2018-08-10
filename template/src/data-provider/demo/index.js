import config from '@/config'
import utils from '@/utils'
export default {
  demoGet ($vm, params) {
    return $vm.$http.get(config.api.demo.url + '?' + utils.http.buildQuery(params))
  },
  demoPost ($vm, params) {
    return $vm.$http.post(config.api.demo.url, params)
  }
}
