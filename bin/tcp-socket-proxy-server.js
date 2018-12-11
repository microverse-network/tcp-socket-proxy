#!/usr/bin/env node

const shortid = require('shortid')
const { argv } = require('yargs')

const Module = require('../server')
global.module = new Module({
  id: shortid.generate(),
  port: argv.port,
})

console.log(global.module.id)
