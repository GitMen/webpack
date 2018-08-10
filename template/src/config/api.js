const hostUrl = process.api

// 根据不同业务区分地址
var demo = {
  url: hostUrl + '/demo'
}


function jointURI (path) {
  return hostUrl + path
}

export default {
  demo,
  host: hostUrl, //域名
  jointURI,
  socket
}
