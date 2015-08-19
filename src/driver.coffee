Cassandra = require 'cassandra-driver'
Promise = require 'bluebird'

class Driver

  constructor: () ->
    @_configuration = {}
    @_connections = {}
    return

  configure: (connName, connConfig) ->
    throw new Error('Configuration object required') unless connConfig?
    @_configuration[connName] = connConfig
    return

  openConnection: (connName, options = {}) ->
    return Promise.reject new Error('Connection not configured') unless @_configuration[connName]?
    if @_connections[connName]? then return @_connections[connName]

    _connection = Promise.defer()
    client = new Cassandra.Client @_configuration[connName]

    client.connect (err) ->
      if err?
        _connection.reject err
      else
        _connection.resolve client

    @_connections[connName] = _connection.promise


  closeConnection: (connName) ->
    return Promise.reject new Error('Connection does not exist') unless @_connections[connName]?
    _defer = Promise.pending()
    @_connections[connName].then (client) =>
      client.shutdown (err, result) =>
        if err then return _defer.reject(err)
        delete @_connections[connName]
        _defer.resolve(result)
    _defer.promise

  reset: () ->
    _connections = []
    for connName, connConfig of @_configuration
      if @_connections[connName]? then _connections.push(@closeConnection(connName))
      delete @_configuration[connName]
    Promise.all(_connections)

  shutdown: () ->
    _connections = []
    for connName, connConfig of @_configuration
      if @_connections[connName]? then _connections.push(@closeConnection(connName))
    Promise.all(_connections)

module.exports = Driver

