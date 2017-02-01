var should = require('should');

var CastUtils = require('../lib/castUtils');

describe('CastUtils', function () {

    describe('#toString()', function () {
        
        const testCases = [
            [null, 'null'],
            [undefined, 'undefined'],
            ['', ''],
            ["", ''],
            ['awd', 'awd'],
            [32, '32']
        ]
        testCases.forEach(function (test) {
            it('for "' + test[0] + '" should return "' + test[1] + '"', function (done) {
                CastUtils.toString(test[0], function (err, result) {
                    if (err) {
                        done(new Error('Error'));
                    } else {
                        result.should.eql(test[1]);
                        done();
                    }
                });
            });
        });
    });

    describe('#toNumber()', function () {
        
        const testCases = [
            ['444', 444],
            ["444", 444],
            [444, 444]
        ]
        testCases.forEach(function (test) {
            it('for "' + test[0] + '" should return "' + test[1] + '"', function (done) {
                CastUtils.toNumber(test[0], function (err, result) {
                    if (err) {
                        done(new Error('Error'));
                    } else {
                        result.should.eql(test[1]);
                        done();
                    }
                });
            });
        });

        const testCasesError = [
            'awd',
            null,
            undefined
        ]
        const errMessage = 'Not a number';
        testCasesError.forEach(function (test) {
            it('for "' + test + '" should return "' + errMessage + '"', function (done) {
                CastUtils.toNumber(test, function (err, result) {
                    if (err) {
                        err.should.eql(errMessage);
                        done();
                    } else {
                        done(new Error('Should not return any "result"'));
                    }
                });
            });
        });
    });

    describe('#toBoolean()', function () {
        
        const testCases = [
            [true, true],
            ['true', true],
            [false, false],
            ['false', false]
        ]
        testCases.forEach(function (test) {
            it('for "' + test[0] + '" should return "' + test[1] + '"', function (done) {
                CastUtils.toBoolean(test[0], function (err, result) {
                    if (err) {
                        done(new Error('Error'));
                    } else {
                        result.should.eql(test[1]);
                        done();
                    }
                });
            });
        });

        const testCasesError = [
            'awd',
            null,
            undefined,
            "",
            0,
            199,
            Number.POSITIVE_INFINITY
        ]
        const errMessage = 'Not a boolean'
        testCasesError.forEach(function (test) {
            it('for "' + test + '" should return "' + errMessage + '"', function (done) {
                CastUtils.toBoolean(test, function (err, result) {
                    if (err) {
                        err.should.eql(errMessage);
                        done();
                    } else {
                        done(new Error('Should not return any "result"'));
                    }
                });
            });
        });
    });

    describe('#toArray()', function () {
        
        const testCases = [
            ['true, null, undefined, "abc"' , ['true', 'null', 'undefined', '"abc"']],
            ['', []],
            ["", []],
            ['awd', ['awd']]
        ]
        testCases.forEach(function (test) {
            it('for "' + test[0] + '" should return "' + test[1] + '"', function (done) {
                CastUtils.toArray(test[0], function (err, result) {
                    if (err) {
                        done(new Error('Error'));
                    } else {
                        result.should.eql(test[1]);
                        done();
                    }
                });
            });
        });

        const testCasesError = [
            null,
            undefined,
            0,
            199,
            true,
            false,
            Object,
            Number.POSITIVE_INFINITY
        ]
        const errMessage = 'comma "," seperated string required'
        testCasesError.forEach(function (test) {
            it('for "' + test + '" should return "' + errMessage + '"', function (done) {
                CastUtils.toArray(test, function (err, result) {
                    if (err) {
                        err.should.eql(errMessage);
                        done();
                    } else {
                        done(new Error('Should not return any "result"'));
                    }
                });
            });
        });
    });
});