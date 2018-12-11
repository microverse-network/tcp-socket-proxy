require('@microverse-network/node')

const Module = require('@microverse-network/module')
const Tracker = require('@microverse-network/tracker-plugin')
const WebRTCNegotiator = require('@microverse-network/webrtcnegotiator-plugin')

global.tracker = new Tracker()
global.webrtcnegotitator = new WebRTCNegotiator()
