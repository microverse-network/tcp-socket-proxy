#!/usr/bin/env node

require('@microverse-network/core/node')
require('@microverse-network/core/plugins-standard')

const { argv } = require('yargs')
const Module = require('../connect')

const { id, port } = argv
global.module = new Module({ id, port })
global.module.once('listening', () => {
  const { address, port } = global.module.server.address()
  console.log(`Tunnel address is ${address}:${port}`)
})
