// url
const hostUrl = process.api
const socket = process.socket
const env = process.env.ENV_CONFIG
const radar = '/radar/api/v1/enterprise'

const api = {
  login_wechat: hostUrl + prefix + '/wechat/login',
}

function jointURI (path) {
  return hostUrl + path
}

export default {
  api,
  env,
  socket,
  prefix: hostUrl,
  jointURI,
  jointResource
}
