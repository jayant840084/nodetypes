var TypeUtils = require('./typeUtils');

/**
 * expose CastUtils
 */
module.exports = CastUtils = {};

/**
 * return a string object of the given 'data'
 * @param {Any} data
 * @param {Function} callback(err, result):
 *      err {Error}: Any error that occured during typecasting,
 *      result {String}: The resulting String is returned
 */
CastUtils.toString = function (data, callback) {
    callback(null, String(data).trim());
}

/**
 * returns a number if the given 'data' is a number 'error' otherwise
 * @param {Any} data
 * @param {Function} callback(err, result):
 *      err {Error}: Any error that occured during typecasting,
 *      result {Number}: The resulting Number is returned
 */
CastUtils.toNumber = function (data, callback) {
    if (data === null) {
        callback('Not a number');
    } else {
        number = Number(data);
        if (isNaN(number))
            callback('Not a number');
        else
            callback(null, number);
    }
}

/**
 * returns a boolean false if the given 'data' is 'null', 'undefined',
 * '0', 'false', and 'true' otherwise
 * @param {Any} data
 * @param {Function} callback(err, result):
 *      err {Error}: Any error that occured during typecasting,
 *      result {Boolean}: The resulting Boolean is returned
 */
CastUtils.toBoolean = function (data, callback) {
    const errMessage = 'Not a boolean';
    switch (data) {
        case true:
        case 'true':
            callback(null, true);
            break;
        case false:
        case 'false':
            callback(null, false);
            break;
        case null:
        case undefined:
        case '0':
        default:
            callback(errMessage);
    }
}

/**
 * returns an array generated by splitting the 'data' string at ','
 * @param {Any} data
 * @param {Function} callback(err, result):
 *      err {Error}: Any error that occured during typecasting,
 *      result {Array}: The resulting Array is returned
 */
CastUtils.toArray = function (data, callback) {
    if (TypeUtils.isString(data)) {
        if (data.length) {
            var array = data.split(','), i;
            // remove empty space and redundant entries
            for (i = array.length - 1; i >= 0; i--) {
                array[i] = array[i].trim();
                if (array[i] === '') array.splice(i, 1);
            }
            // remove duplicate entries
            for (i = array.length - 1; i >= 0; i--) {
                for (var j = i - 1; j >= 0; j--) {
                    if (array[i] === array[j]) {
                        array.splice(j, 1);
                        --i;
                    }
                }
            }
            callback(null, array);
        } else {
            callback(null, []);
        }
    } else {
        callback('comma "," seperated string required');
    }
}

/**
 * returns a JavaScript Date object from the given 'data' string
 * @param {Any} data
 * @param {Function} callback(err, result):
 *      err {Error}: Any error that occured during typecasting,
 *      result {Date}: The resulting Date is returned
 */
CastUtils.toDate = function (data, callback) {
    date = new Date(data);
    if (date.toString() === 'Invalid Date')
        callback('Invalid Date');
    else
        callback(null, date);
}