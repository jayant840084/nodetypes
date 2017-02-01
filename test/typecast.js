var should = require('should');

var toType = require('../index').to;

describe('#toType()', function () {

    it('for type "string" and data "abcd" should return "abcd"', function (done) {
        toType('string', 'abcd', function (err, result) {
            if (err) {
                done(new Error('Error'));
            } else {
                result.should.equal('abcd');
                done();
            }
        });
    });

    it('for type "number" and data "43" should return 43', function (done) {
        toType('number', '43', function (err, result) {
            if (err) {
                done(new Error('Error'));
            } else {
                result.should.equal(43);
                done();
            }
        });
    });

    it('for type "boolean" and data "false" should return false', function (done) {
        toType('boolean', 'false', function (err, result) {
            if (err) {
                done(new Error('Error'));
            } else {
                result.should.equal(false);
                done();
            }
        });
    });

    it('for type "array" and data "a,b,c,,d" should return ["a","b","c","d"]', function (done) {
        toType('array', 'a,b,c,,d', function (err, result) {
            if (err) {
                done(new Error('Error'));
            } else {
                result.should.eql(['a','b','c','d']);
                done();
            }
        });
    });

    it('for type "date" and data "1485801401567" should return "Tue Jan 31 2017 00:07:03 GMT+0530 (IST)"', function (done) {
        toType('date', 1485801401567, function (err, result) {
            if (err) {
                done(new Error('Error'));
            } else {
                result.should.eql(new Date('2017-01-30T18:36:41.567Z'));
                done();
            }
        })
    });
});