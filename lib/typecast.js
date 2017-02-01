var TypeUtils = require('./typeUtils');
var CastUtils = require('./castUtils');

/**
 * takes a type and data and a callback:
 * callback is called when the data is successfully casted in the mentioned data type
 * and returned as result, if casting fails err is returned
 * @param {String} type
 * @param {Any} data
 * @callback {function} callback(err, result): 
 *      called after casting the data in the mentioned type
 *      err {String}: The error if any,
 *      result {Any}: True if the given data is of given type, false otherwise
 */
module.exports = function (type, data, callback) {
    switch (type) {
        case 'string':
            if (TypeUtils.isString(data))
                callback(null, data);
            else
                CastUtils.toString(data, function (err, data) {
                    if (err)
                        callback(err);
                    else
                        callback(null, data);
                });
            break;
        case 'number':
            if (TypeUtils.isNumber(data))
                callback(null, data);
            else
                CastUtils.toNumber(data, function (err, data) {
                    if (err)
                        callback(err);
                    else
                    callback(null, data);
                })
            break;
        case 'boolean':
            if (TypeUtils.isBoolean(data))
                callback(null, data);
            else
                CastUtils.toBoolean(data, function (err, data) {
                    if (err)
                        callback(err);
                    else
                        callback(null, data);
                });
            break;
        case 'array':
            if (TypeUtils.isArray(data))
                callback(null, data);
            else
                CastUtils.toArray(data, function (err, data) {
                    if (err)
                        callback(err);
                    else
                        callback(null, data);
                });
            break;
        case 'date':
            if (TypeUtils.isDate(data))
                callback(null, data);
            else
                CastUtils.toDate(data, function (err, data) {
                    if (err)
                        callback(err);
                    else
                        callback(null, data);
                });
            break;
        default:
            callback('Invalid type given');
    }
}