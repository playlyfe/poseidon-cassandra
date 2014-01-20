module.exports = {
  "Keyspace": {
    "require": {
      "Driver": "./driver"
    },
    "constructor": {
      "params": ["connectionName"],
      "body": """
      this.connectionName = connectionName;
      this.instance = Driver.openConnection(connectionName);
      return;
      """
    },
    "type": "promise",
    "functions": {
      "execute": {},
      "executeAsPrepared": {},
      "streamRows": {},
      "streamFields": {}
    }
  }
}
