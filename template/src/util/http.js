function buildQuery (obj) {
  var result = []
  for (var key in obj) {
    if (Array.isArray(obj)) {
      obj.forEach(item => {
        result.push(key + '=' + item)
      })
    } else {
      result.push(key + '=' + obj[key])
    }
  }
  return result.join('&')
}

function findQuery (url, key) {
  var querys = url.split('?')
  if (querys.length === 2) {
    var query = querys[1]
    var queryObjs = query.split('&')
    for (let index = 0; index < queryObjs.length; index++) {
      var item = queryObjs[index]
      var keyValues = item.split('=')
      if (keyValues[0] === key) {
        return keyValues[1]
      }
    }
  }
}

export default {
  findQuery,
  buildQuery
}
