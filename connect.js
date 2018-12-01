const net = require('net')

const shortid = require('shortid')

const Module = require('@microverse-network/core/module')

const makeArrayTransformer = require('./arraytransformer')
const makeBufferTransformer = require('./buffertransformer')

module.exports = class TCPSocketProxy extends Module {
  handleReady() {
    super.handleReady()
    this.createServer()
  }

  createServer() {
    this.server = new net.Server()
    this.server.listen(this.options.port || 0, () => {
      this.emit('listening')
    })
    this.server.on('connection', socket => {
      const stream = this.mux.createStream(shortid.generate())
      this.bindSocketStream(socket, stream)
    })
  }

  handleMux(mux) {
    super.handleMux(mux)
    this.mux = mux
  }

  bindSocketStream(socket, stream) {
    socket.pipe(makeArrayTransformer()).pipe(stream)
    stream.pipe(makeBufferTransformer()).pipe(socket)
  }
}
