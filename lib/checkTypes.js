var TypeUtils = require('./typeUtils');

/**
 * when a callback is provided and given data is of the mentioned type callback is
 * invoked with result as true, and result as false if data is not of mentioned type
 * if type does not match any of the predefined cases an err is returned
 * when no callback is provided function returns true is data is of mentioned type and false otherwise
 * if type does not match and of the predefined cases an error is thrown
 * @param {String} type
 * @param {Any} data
 * @callback {function} callback(err, result): 
 *      called after descerning the type of the data
 *      err {String}: The error if any,
 *      result {Boolean}: True if the given data is of given type, false otherwise
 * @return {Boolean}
 */
module.exports = function (type, data, callback) {
    if (callback) {
        switch (type) {
            case 'string':
                callback(null, TypeUtils.isString(data));
                break;
            case 'number':
                callback(null, TypeUtils.isNumber(data));
                break;
            case 'boolean':
                callback(null, TypeUtils.isBoolean(data));
                break;
            case 'array':
                callback(null, TypeUtils.isArray(data));
                break;
            case 'date':
                callback(null, TypeUtils.isDate(data));
                break;
            case 'object':
                callback(null, TypeUtils.isObject(data));
                break;
            default:
                callback('INVALID TYPE GIVEN');
        }
    } else {
        switch (type) {
            case 'string':
                return TypeUtils.isString(data);
                break;
            case 'number':
                return TypeUtils.isNumber(data);
                break;
            case 'boolean':
                return TypeUtils.isBoolean(data);
                break;
            case 'array':
                return TypeUtils.isArray(data);
                break;
            case 'date':
                return TypeUtils.isDate(data);
                break;
            case 'object':
                return TypeUtils.isObject(data);
                break;
            default:
                throw(new Error('INVALID TYPE GIVEN'));
        }
    }
}