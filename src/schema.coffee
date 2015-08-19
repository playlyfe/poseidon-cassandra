module.exports = {
  "Keyspace": {
    "require": {
      "Driver": "./driver"
    },
    "constructor": {
      "params": ["Driver", "connectionName"],
      "body": """
      this.connectionName = connectionName;
      this.instance = Driver.openConnection(connectionName);
      return;
      """
    },
    "type": "promise",
    "functions": {
      "batch": {},
      "eachRow": {},
      "execute": {},
      "stream": {},
    }
  }
}
