import config from '@/config'
import utils from '@/utils'
export default {
  demoGet ($vm, params) {
    return $vm.$http.get(config.api.demo_url + '?' + utils.buildQuery(params))
  },
  demoPost ($vm, params) {
    return $vm.$http.post(config.api.demo_url, params)
  }
}
