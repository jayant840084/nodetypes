var should = require('should');

var TypeUtils = require('../lib/typeUtils');

describe('TypeUtils', function () {

    describe('.isString()', function () {
        var testCasesTrue = [
            'wadadfefa',
            '456',
            '*%^&',
            "awdsr",
            '',
            "",
        ]
        testCasesTrue.forEach(function (test) {
            it('for "' + test + '" should return true', function () {
                TypeUtils.isString(test).should.equal(true)
            });
        });

        testCasesFalse = [
            NaN,
            Object,
            undefined,
            null,
            5,
            true,
            false,
            [],
            {}
        ]
        testCasesFalse.forEach(function (test) {
            it('for "' + test + '" should return false', function () {
                TypeUtils.isString(test).should.be.equal(false);
            });
        });
    });

    describe('.isEmptyString()', function () {
        testCasesTrue = [
            '',
            ""
        ]
        testCasesTrue.forEach(function (test) {
            it('for "' + test + '" should return true', function () {
                TypeUtils.isEmptyString(test).should.equal(true);
            });
        });
        

        testCasesFalse = [
            NaN,
            Object,
            undefined,
            null,
            5,
            true,
            false,
            'wadadfefa',
            '456',
            '*%^&',
            [],
            {}
        ]
        testCasesFalse.forEach(function (test) {
            it('for "' + test + '" should return false', function () {
                TypeUtils.isEmptyString(test).should.equal(false);
            });
        });
    });

    describe('.isNumber()', function () {
        testCasesTrue = [
            3,
            2523525,
            0,
            0.0,
            23.44451
        ]
        testCasesTrue.forEach(function (test) {
            it('for "' + test + '" should return true', function () {
                TypeUtils.isNumber(test).should.equal(true);
            });
        });

        testCasesFalse = [
            NaN,
            Object,
            undefined,
            null,
            true,
            false,
            '456',
            '*%^&',
            "awdsr",
            '',
            "",
            [],
            {}
        ]
        testCasesFalse.forEach(function (test) {
            it('for "' + test + '" should return false', function () {
                TypeUtils.isNumber(test).should.equal(false);
            });
        });
    });

    describe('.isInteger()', function () {
        testCasesTrue = [
            3,
            2523525,
            0,
        ]
        testCasesTrue.forEach(function (test) {
            it('for "' + test + '" should return true', function () {
                TypeUtils.isInteger(test).should.equal(true);
            });
        });

        testCasesFalse = [
            NaN,
            Object,
            undefined,
            null,
            true,
            false,
            32.4,
            0.1,
            '456',
            '*%^&',
            "awdsr",
            '',
            "",
            [],
            {}
        ]
        testCasesFalse.forEach(function (test) {
            it('for "' + test + '" should return false', function () {
                TypeUtils.isInteger(test).should.equal(false);
            });
        });
    });

    describe('.isBoolean()', function () {
        testCasesTrue = [
            true,
            false
        ]
        testCasesTrue.forEach(function (test) {
            it('for "' + test + '" should return true', function () {
                TypeUtils.isBoolean(test).should.equal(true);
            });
        });

        testCasesFalse = [
            NaN,
            Object,
            undefined,
            null,
            5,
            '456',
            '*%^&',
            "awdsr",
            '',
            "",
            [],
            {}
        ]
        testCasesFalse.forEach(function (test) {
            it('for "' + test + '" should return false', function () {
                TypeUtils.isBoolean(test).should.equal(false);
            });
        });
    });

    describe('.isArray()', function () {
        testCasesTrue = [
            [1,2,3],
            [2,'sef', 4],
            ["aerg", 'awef'],
            [''],
            [NaN, undefined, null],
            []
        ]
        testCasesTrue.forEach(function (test) {
            it('for "' + test + '" should return true', function () {
                TypeUtils.isArray(test).should.equal(true);
            });
        });

        testCasesFalse = [
            NaN,
            Object,
            undefined,
            null,
            5,
            '456',
            '*%^&',
            "awdsr",
            '',
            "",
            true,
            false,
            {}
        ]
        testCasesFalse.forEach(function (test) {
            it('for "' + test + '" should return false', function () {
                TypeUtils.isArray(test).should.equal(false);
            });
        });
    });

    describe('.isEmptyArray()', function () {
        testCasesTrue = [
            []
        ]
        testCasesTrue.forEach(function (test) {
            it('for "' + test + '" should return true', function () {
                TypeUtils.isEmptyArray(test).should.equal(true);
            });
        });

        testCasesFalse = [
            [1,2,3],
            [2,'sef', 4],
            ["aerg", 'awef'],
            [''],
            [NaN, undefined, null],
        ]
        testCasesFalse.forEach(function (test) {
            it('for "' + test + '" should return false', function () {
                TypeUtils.isEmptyArray(test).should.equal(false);
            });
        });
    });

    describe('.isUndefined()', function () {
        testCasesTrue = [
            undefined
        ]
        testCasesTrue.forEach(function (test) {
            it('for "' + test + '" should return true', function () {
                TypeUtils.isUndefined(test).should.equal(true);
            });
        });

        testCasesFalse = [
            NaN,
            Object,
            null,
            5,
            '456',
            '*%^&',
            "awdsr",
            '',
            "",
            true,
            false,
            [''],
            {}
        ]
        testCasesFalse.forEach(function (test) {
            it('for "' + test + '" should return false', function () {
                TypeUtils.isUndefined(test).should.equal(false);
            });
        });
    });

    describe('.isNull()', function () {
        testCasesTrue = [
            null
        ]
        testCasesTrue.forEach(function (test) {
            it('for "' + test + '" should return true', function () {
                TypeUtils.isNull(test).should.equal(true);
            });
        });

        testCasesFalse = [
            NaN,
            Object,
            undefined,
            5,
            '456',
            '*%^&',
            "awdsr",
            '',
            "",
            true,
            false,
            [''],
            {}
        ]
        testCasesFalse.forEach(function (test) {
            it('for "' + test + '" should return false', function () {
                TypeUtils.isNull(test).should.equal(false);
            });
        });
    });

    describe('.isAssigned()', function () {
        testCasesTrue = [
            NaN,
            Object,
            5,
            '456',
            '*%^&',
            "awdsr",
            '',
            "",
            true,
            false,
            [''],
            {}
        ]
        testCasesTrue.forEach(function (test) {
            it('for "' + test + '" should return true', function () {
                TypeUtils.isAssigned(test).should.equal(true);
            });
        });

        testCasesFalse = [
            undefined,
            null
        ]
        testCasesFalse.forEach(function (test) {
            it('for "' + test + '" should return false', function () {
                TypeUtils.isAssigned(test).should.equal(false);
            });
        });
    });

    describe('.isInfinity()', function () {
        testCasesTrue = [
            Number.POSITIVE_INFINITY,
            Number.NEGATIVE_INFINITY
        ]
        testCasesTrue.forEach(function (test) {
            it('for "' + test + '" should return true', function () {
                TypeUtils.isInfinity(test).should.equal(true);
            });
        });

        testCasesFalse = [
            NaN,
            Object,
            null,
            undefined,
            5,
            '456',
            '*%^&',
            "awdsr",
            '',
            "",
            true,
            false,
            [''],
            {}
        ]
        testCasesFalse.forEach(function (test) {
            it('for "' + test + '" should return false', function () {
                TypeUtils.isInfinity(test).should.equal(false);
            });
        });
    });

    describe('.isObject()', function () {
        testCasesTrue = [
            {},
            {'awd': 'awd'}
        ]
        testCasesTrue.forEach(function (test) {
            it('for "' + test + '" should return true', function () {
                TypeUtils.isObject(test).should.equal(true);
            });
        });

        testCasesFalse = [
            NaN,
            undefined,
            Object,
            null,
            5,
            '',
            "",
            true,
            false,
            ['']
        ]
        testCasesFalse.forEach(function (test) {
            it('for "' + test + '" should return false', function () {
                TypeUtils.isObject(test).should.equal(false);
            });
        });
    });

    describe('.isEmptyObject()', function () {
        testCasesTrue = [
            {},
            new Object(),
        ]
        testCasesTrue.forEach(function (test) {
            it('for "' + test + '" should return true', function () {
                TypeUtils.isEmptyObject(test).should.equal(true);
            });
        });

        testCasesFalse = [
            NaN,
            {'awd': 'awd'},
            [''],
            new Date()
        ]
        testCasesFalse.forEach(function (test) {
            it('for "' + test + '" should return false', function () {
                TypeUtils.isEmptyObject(test).should.equal(false);
            });
        });
    });

    describe('.isDate()', function () {
        testCasesTrue = [
            new Date(),
            new Date(1245344213)
        ]
        testCasesTrue.forEach(function (test) {
            it('for "' + test + '" should return true', function () {
                TypeUtils.isDate(test).should.equal(true);
            });
        });

        testCasesFalse = [
            NaN,
            {'awd': 'awd'},
            [''],
            new Object()
        ]
        testCasesFalse.forEach(function (test) {
            it('for "' + test + '" should return false', function () {
                TypeUtils.isDate(test).should.equal(false);
            });
        });
    });
});