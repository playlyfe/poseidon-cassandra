Promise = require('poseidon').Promise;
Driver = require('./driver');
function Keyspace(connectionName) {
    this.connectionName = connectionName;
    this.instance = Driver.openConnection(connectionName);
    return;
}
Keyspace.prototype.execute = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                deferred.reject(arguments[0]);
            } else {
                switch (arguments.length) {
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(arguments.slice(1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.execute(callback);
            break;
        case 1:
            instanceValue.execute(args[0], callback);
            break;
        case 2:
            instanceValue.execute(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.execute(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.execute(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.execute(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.execute.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Keyspace.prototype.executeAsPrepared = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                deferred.reject(arguments[0]);
            } else {
                switch (arguments.length) {
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(arguments.slice(1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.executeAsPrepared(callback);
            break;
        case 1:
            instanceValue.executeAsPrepared(args[0], callback);
            break;
        case 2:
            instanceValue.executeAsPrepared(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.executeAsPrepared(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.executeAsPrepared(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.executeAsPrepared(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.executeAsPrepared.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Keyspace.prototype.streamRows = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                deferred.reject(arguments[0]);
            } else {
                switch (arguments.length) {
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(arguments.slice(1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.streamRows(callback);
            break;
        case 1:
            instanceValue.streamRows(args[0], callback);
            break;
        case 2:
            instanceValue.streamRows(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.streamRows(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.streamRows(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.streamRows(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.streamRows.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Keyspace.prototype.streamFields = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                deferred.reject(arguments[0]);
            } else {
                switch (arguments.length) {
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(arguments.slice(1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.streamFields(callback);
            break;
        case 1:
            instanceValue.streamFields(args[0], callback);
            break;
        case 2:
            instanceValue.streamFields(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.streamFields(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.streamFields(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.streamFields(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.streamFields.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
module.exports = Keyspace;