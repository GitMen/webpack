// url
const hostUrl = process.api
const env = process.env.ENV_CONFIG
const socket = process.socket //如果需要socket服务，自行配置socket地址，与api配置方式相同
const api = {
  demo_url: hostUrl + '/demo',
}

function jointURI (path) {
  return hostUrl + path
}

export default {
  api,
  env, // 区分环境
  host: hostUrl, //域名
  jointURI,
  socket
}
