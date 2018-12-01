const { Transform } = require('stream')

module.exports = () => {
  return new Transform({
    objectMode: true,
    transform(chunk, encoding, callback) {
      callback(null, Array.from(chunk))
    },
  })
}
