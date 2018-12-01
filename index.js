const net = require('net')

const Module = require('@microverse-network/module')

const makeArrayTransformer = require('./arraytransformer')
const makeBufferTransformer = require('./buffertransformer')

module.exports = class TCPSocketProxy extends Module {
  static get _name() {
    return 'tcp-socket-proxy'
  }

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
