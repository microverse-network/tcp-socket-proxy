#!/usr/bin/env node

require('@microverse-network/node')

const shortid = require('shortid')
const { argv } = require('yargs')

const Tracker = require('@microverse-network/tracker-plugin')
global.tracker = new Tracker()

const WebRTCNegotiator = require('@microverse-network/webrtcnegotiator-plugin')
global.webrtcnegotitator = new WebRTCNegotiator()

const Module = require('../index')
global.module = new Module({
  id: shortid.generate(),
  port: argv.port,
})

console.log(global.module.id)
