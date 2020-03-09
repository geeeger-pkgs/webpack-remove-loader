'use strict'
const { getOptions } = require('loader-utils')
const validateOptions = require('schema-utils')

const schema = {
  type: 'object',
  properties: {
    start: {
      type: 'string',
    },
    end: {
      type: 'string',
    },
  },
}

module.exports = function WebpackRemoveLoader(code) {
  const opts = getOptions(this)
  validateOptions(schema, opts, {
    name: 'Remove Loader',
    baseDataPath: 'options'
  })
  const callback = this.async()
  let start
  while ((start = code.indexOf(opts.start)) !== -1) {
    const pos = code.indexOf(opts.end)
    if (pos !== -1) {
      code = code.slice(0, start) + code.slice(pos + opts.end.length)
    } else {
      start = -1
    }
  }
  callback(null, code)
}