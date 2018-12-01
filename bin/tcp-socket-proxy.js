#!/usr/bin/env node

require('@microverse-network/core/node')
require('@microverse-network/core/plugins-standard')

const { argv } = require('yargs')
const shortid = require('shortid')

const Module = require('../index')
global.module = new Module({
  id: shortid.generate(),
  port: argv.port,
})

console.log(global.module.id)
