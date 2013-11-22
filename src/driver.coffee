Cassandra = require 'node-cassandra-cql'
Q = require 'q'

class Driver

  @_configuration: {}
  @_connections: {}
  @configure: (connName, connConfig) ->
    throw new Error('Configuration object required') unless connConfig?
    @_configuration[connName] = connConfig
    return

  @openConnection: (connName, options = {}) ->
    throw Error('Connection not configured') unless @_configuration[connName]?
    if @_connections[connName]? then return @_connections[connName]
    connection = (=>
      _connection = Q.defer()
      client = new Cassandra.Client @_configuration[connName]
      client.connect (err) ->
        if err?
          _connection.reject err
        else
          _connection.resolve client
      _connection.promise
    )()
    connection.then (client) =>
      @_connections[connName] = connection
    .fail (err) =>
      @openConnection(connName)

  @closeConnection: (connName) ->
    throw Error('Connection does not exist') unless @_connections[connName]?
    @_connections[connName].then (client) =>
      client.shutdown()
      delete @_connections[connName]
    .done()
    return

  @reset: () ->
    for connName, connConfig of @_configuration
      if @_connections[connName]? then @closeConnection(connName)
      delete @_configuration[connName]
    return

  @shutdown: () ->
    for connName, connConfig of @_configuration
      if @_connections[connName]? then @closeConnection(connName)
    return

module.exports = Driver

