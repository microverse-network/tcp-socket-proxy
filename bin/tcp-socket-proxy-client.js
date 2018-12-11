#!/usr/bin/env node

const { argv } = require('yargs')

const Module = require('../client')
const { id, port } = argv
global.module = new Module({ id, port })
global.module.once('listening', () => {
  const { address, port } = global.module.server.address()
  console.log(`Tunnel address is ${address}:${port}`)
})
