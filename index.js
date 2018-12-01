const net = require('net')

const Module = require('@microverse-network/core/module')

const makeArrayTransformer = require('./arraytransformer')
const makeBufferTransformer = require('./buffertransformer')

module.exports = class TCPSocketProxy extends Module {
  handleStream(stream) {
    super.handleStream(stream)
    const { port } = this.options
    this.bindSocketStream(net.createConnection({ port }), stream)
  }

  bindSocketStream(socket, stream) {
    socket.pipe(makeArrayTransformer()).pipe(stream)
    stream.pipe(makeBufferTransformer()).pipe(socket)
  }
}
