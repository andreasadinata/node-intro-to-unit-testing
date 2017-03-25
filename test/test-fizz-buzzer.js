const should = require('chai').should();
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function () {
    it('should only show fizzbuzz when the number is only divisble by 15', function () {
        const normalCase = [
          15, 30, 45
        ]
        normalCase.forEach(function (value) {
            fizzBuzzer(value).should.equal('fizz-buzz');
        });
    });
    it('should only show fizz when the number is only divisible by 3', function () {
        const normalCase = [
            3, 9, 12
        ]
        normalCase.forEach(function (value) {
            fizzBuzzer(value).should.equal('fizz');
        });
    });
    it('should only show fizzbuzz when the number is only divisible by 5', function () {
        const normalCase = [
            5, 10, 20
        ]
        normalCase.forEach(function (value) {
            fizzBuzzer(value).should.equal('buzz');
        });
    });
    it('should return number if not mult by 3 or 5', function () {
        const normalCase = [
            1, 2, 4, 11, 13, 14
        ]
        normalCase.forEach(function (value) {
            fizzBuzzer(value).should.equal(value);
        });
    });
    it('should return error if it is not number', function () {
        const badCase = [true, false, 'cat', function () {}, [1, 2, 3]]
        badCase.forEach(function (value) {
            (function () {
                fizzBuzzer(value)
            }).should.throw(Error);
        });
    });
});
