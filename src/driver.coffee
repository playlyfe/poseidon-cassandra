Cassandra = require 'node-cassandra-cql'
{Promise} = require 'poseidon'

class Driver

  @_configuration: {}
  @_connections: {}

  @configure: (connName, connConfig) ->
    throw new Error('Configuration object required') unless connConfig?
    Driver._configuration[connName] = connConfig
    return

  @openConnection: (connName, options = {}) ->
    return Promise.reject new Error('Connection not configured') unless Driver._configuration[connName]?
    if Driver._connections[connName]? then return Driver._connections[connName]
    connection = (->
      _connection = Promise.pending()
      client = new Cassandra.Client Driver._configuration[connName]
      client.connect (err) ->
        if err?
          _connection.reject err
        else
          _connection.resolve client
      _connection.promise
    )()
    connection.then (client) ->
      Driver._connections[connName] = connection
    .catch (err) ->
      Driver.openConnection(connName)

  @closeConnection: (connName) ->
    return Promise.reject new Error('Connection does not exist') unless Driver._connections[connName]?
    _defer = Promise.pending()
    Driver._connections[connName].then (client) ->
      client.shutdown (err, result) ->
        if err then return _defer.reject(err)
        delete Driver._connections[connName]
        _defer.resolve(result)
    _defer.promise

  @reset: () ->
    _connections = []
    for connName, connConfig of Driver._configuration
      if Driver._connections[connName]? then _connections.push(Driver.closeConnection(connName))
      delete Driver._configuration[connName]
    Promise.all(_connections)

  @shutdown: () ->
    _connections = []
    for connName, connConfig of Driver._configuration
      if Driver._connections[connName]? then _connections.push(Driver.closeConnection(connName))
    Promise.all _connections

module.exports = Driver

