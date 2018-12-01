#!/usr/bin/env node

require('@microverse-network/node')

const { argv } = require('yargs')

const Tracker = require('@microverse-network/tracker-plugin')
global.tracker = new Tracker()

const WebRTCNegotiator = require('@microverse-network/webrtcnegotiator-plugin')
global.webrtcnegotitator = new WebRTCNegotiator()

const Module = require('../connect')
const { id, port } = argv
global.module = new Module({ id, port })
global.module.once('listening', () => {
  const { address, port } = global.module.server.address()
  console.log(`Tunnel address is ${address}:${port}`)
})
