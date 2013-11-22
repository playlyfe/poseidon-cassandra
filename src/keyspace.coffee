Driver = require './driver'
poseidon = require 'poseidon'
Q = require 'q'

class Keyspace

  constructor: (connName) ->
    @_connName = connName
    @_keyspace = Driver.openConnection @_connName
    [
      'execute'
      'executeAsPrepared'
      'streamRows'
      'streamField'
    ].forEach (fn) ->
      @[fn] = poseidon.wrapPromise @_keyspace, fn
    , @
    return

module.exports = Keyspace
