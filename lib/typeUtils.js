/**
 * expose TypeUtils
 */
module.exports = TypeUtils = {};


/**
 * returns true if 'data' is a string, false otherwise
 * @param {Any} data
 * @return {Boolean}
 */
TypeUtils.isString = function (data) {
    return typeof data === 'string'
}

/**
 * returns true if 'data' is an empty string, false otherwise
 * @param {Any} data
 * @return {Boolean}
 */
TypeUtils.isEmptyString =  function (data) {
    return data === '';
}

/**
 * returns true if 'data' is a number, false otherwise
 * @param {Any} data
 * @return {Boolean}
 */
TypeUtils.isNumber =  function (data) {
    return typeof data === 'number' &&
        isNaN(data) === false &&
        data !== Number.POSITIVE_INFINITY &&
        data !== Number.NEGATIVE_INFINITY;
}

/**
 * returns true if 'data' is an integer, false otherwise
 * @param {Any} data
 * @return {Boolean}
 */
TypeUtils.isInteger = function (data) {
    return this.isNumber(data) && data % 1 === 0;
}

/**
 * returns true if 'data' is a boolean, false otherwise
 * @param {Any} data
 * @return {Boolean}
 */
TypeUtils.isBoolean = function (data) {
    return data === false || data === true;
}

/**
 * returns true if 'data' is an array, false otherwise
 * @param {Any} data
 * @return {Boolean}
 */
TypeUtils.isArray = function (data) {
    return Array.isArray(data);
}

/**
 * returns true if 'data' is an empty array, false otherwise
 * @param {Any} data
 * @return {Boolean}
 */
TypeUtils.isEmptyArray = function (data) {
    return this.isArray(data) && data.length === 0;
}

/**
 * returns true if 'data' is undefined, false otherwise
 * @param {Any} data
 * @return {Boolean}
 */
TypeUtils.isUndefined = function (data) {
    return data === undefined;
}

/**
 * returns true if 'data' is null, false otherwise
 * @param {Any} data
 * @return {Boolean}
 */

TypeUtils.isNull = function (data) {
    return data === null;
}

/**
 * returns true if 'data' is neither null nor undefined, false otherwise
 * @param {Any} data
 * @return {Boolean}
 */

TypeUtils.isAssigned = function (data) {
    return ! this.isUndefined(data) && ! this.isNull(data);
}

/**
 * return true if 'data' is positive or negative infinity, false otherwise
 * @param {Any} data
 * @return {Boolean}
 */
TypeUtils.isInfinity = function (data) {
    return data === Number.POSITIVE_INFINITY ||
        data === Number.NEGATIVE_INFINITY;
}

/**
 * returns true if 'data' is a javascript object, false otherwise
 * @param {Any} data
 * @return {Boolean}
 */
TypeUtils.isObject = function (data) {
    return Object.prototype.toString.call(data) === '[object Object]';
}

/**
 * returns true if 'data' is an empty object, false otherwise
 * @param {Any} data
 * @return {Boolean}
 */
TypeUtils.isEmptyObject = function (data) {
    return this.isObject(data) && Object.keys(data).length === 0;
}

/**
 * returns true if 'data' is a valid date, false otherwise
 * @param {Any} data
 * @return {Boolean}
 */
TypeUtils.isDate = function (data) {
    try {
        return data instanceof Date && this.isInteger(data.getTime());
    } catch (e) {
        return false;
    }
}