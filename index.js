coffee = require('coffee-script');
var index = null;
if (process.env.PLAYLYFE_TEST) {
  try {
    index = require('./src-cov/cassandra');
  } catch(e) {
    index = require('./src/cassandra');
  }
} else {
  index = require('./src/cassandra');
}
module.exports = index;
