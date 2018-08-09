import config from '@/config'

var socket = null
var isOpen = false
var events = []
var uuid = ''

console.log('socket module')
function createSocket (io) {
  if (!io || (isOpen && uuid === io && socket)) return
  if (socket) innerClose()
  uuid = io
  socket = new WebSocket(config.socket)

  socket.onopen = () => {
    console.log('socket 创建成功')
    isOpen = true
    emit('', uuid, '')
  }
  socket.onmessage = (res) => {
    var data = JSON.parse(res.data)
    console.log('socket 收到新消息', data)
    var callback = events[data.event]
    if (callback) {
      callback(data.content)
    }
  }
  socket.onerror = (res) => {
    console.log(res)
  }
  socket.onclose = (event) => {
    isOpen = false
    console.log('socket 链接关闭' + event.code)
    if (event.code === 1000) return // code === 1000 代表手动关闭 不要重启
    createSocket(uuid)
  }
}

function addEvent (event, callback) {
  events[event] = callback
}
function removeEvent (event) {
  delete events[event]
}
function emit (event, uuid, message) {
  if (socket) {
    innerEmit(() => {
      var sendMap = {'event': event, 'uuid': uuid, 'content': message}
      socket.send(JSON.stringify(sendMap))
    }, 1000)
  } else {
    console.log('socket 未连接成功,无法发送')
  }
}
function emitLocal (event, io, message) {
  console.log('socket 收到本地消息--', io)
  if (uuid === io) {
    var callback = events[event]
    if (callback) {
      callback(message)
    }
  }
}
function close () {
  events = []
  innerClose()
}

// inner function

function innerEmit (callback, interval) {
  // 正在建立连接连接，还没有完成
  console.log(socket.readyState)
  if (socket.readyState === 0) {
    setTimeout(() => {
      innerEmit(callback, interval)
    }, interval)
  // 连接成功建立，可以进行通信
  } else if (socket.readyState === 1) {
    if (callback) callback()
  } else {
    console.log('socket正在关闭或处于关闭状态')
  }
}

function innerClose () {
  if (socket) {
    socket.close()
  }
  isOpen = false
  uuid = ''
}

export default {
  createSocket,
  addEvent,
  removeEvent,
  emitLocal,
  emit,
  close
}
