Cassandra = require '../index'
Driver = new Cassandra.Driver()
Keyspace = Cassandra.Keyspace
Driver.configure('logs', {
  contactPoints: ["127.0.0.1"],
  keyspace: "pl_logs"
})

keyspace = new Keyspace(Driver, 'logs')
keyspace.execute("SELECT * FROM staging_activity_meta")
.then (data) ->
  console.log data
.then ->
  Driver.shutdown()
.done()
