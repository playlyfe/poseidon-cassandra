coffee = require('coffee-script');
var index = null;
if (process.env.PLAYLYFE_TEST) {
  try {
    index = require('./src-cov/cassandra');
  } catch(e) {
    index = require('./lib/cassandra');
  }
} else {
  index = require('./lib/cassandra');
}
module.exports = index;
