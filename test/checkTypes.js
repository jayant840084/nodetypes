var should = require('should');

var isType = require('../index').is;

describe('.isType()', function () {

    it('for type "string" and data "afaw" should return true', function () {
        isType('string', 'afaw').should.equal(true);
    });

    it('for type "number" and data "5" should return true', function () {
        isType('number', 5).should.equal(true);
    });

    it('for type "boolean" and data "true" should return true', function () {
        isType('boolean', true).should.equal(true);
    });

    it('for type "array" and data "[21,2]" should return true', function () {
        isType('array', [21,2]).should.equal(true);
    });

    it('for type "date" and data "new Date()" should return true', function () {
        isType('date',new Date()).should.equal(true);
    });

    it('for type "object" and data "{}" should return true', function () {
        isType('object', {}).should.equal(true);
    });

    it('for type "abc" and data "abc" should throw error', function () {
        (function () {
            isType('abc', 'abc')
        }).should.throw('INVALID TYPE GIVEN');
    })
});

describe('#isType()', function () {
    it('for type "string" and data "afaw" should return true', function (done) {
        isType('string', 'afaw', function (err, result) {
            if (err) {
                done(new Error("Error"));
            } else {
                result.should.equal(true);
                done();
            }
        });
    });

    it('for type "number" and data "5" should return true', function (done) {
        isType('number', 5, function (err, result) {
            if (err) {
                done(new Error("Error"));
            } else {
                result.should.equal(true);
                done();
            }
        });
    });

    it('for type "boolean" and data "true" should return true', function (done) {
        isType('boolean', true, function (err, result) {
            if (err) {
                done(new Error("Error"));
            } else {
                result.should.equal(true);
                done();
            }
        });
    });

    it('for type "array" and data "[]" should return true', function (done) {
        isType('array', [], function (err, result) {
            if (err) {
                done(new Error("Error"));
            } else {
                result.should.equal(true);
                done();
            }
        });
    });

    it('for type "date" and data "new Date()" should return true', function (done) {
        isType('date', new Date(), function (err, result) {
            if (err) {
                done(new Error("Error"));
            } else {
                result.should.equal(true);
                done();
            }
        });
    });

    it('for type "object" and data "{}" should return true', function (done) {
        isType('object', {}, function (err, result) {
            if (err) {
                done(new Error("Error"));
            } else {
                result.should.equal(true);
                done();
            }
        });
    });

    it('for type "abc" and data "abc" should return "err"', function (done) {
        isType('abc', 'abc', function (err, result) {
            if (err) {
                err.should.eql('INVALID TYPE GIVEN');
                done();
            } else {
                done(new Error("There should be no result only and error"))
            }
        })
    })
});