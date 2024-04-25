let checkFive = require('../checkFive')

describe('checkFive()', function() {

    test('should print correct output when inputing a number lower than 5', function() {
        let output = checkFive(2)
        expect(output).toEqual('2 is less than 5.')
    })
    test('should print correct output when inputing a number greater than 5', function() {
        let output = checkFive(7)
        expect(output).toEqual('7 is greater than 5.')
    })
    test('should print correct output when inputing a number equal to 5', function() {
        let output = checkFive(5)
        expect(output).toEqual('5 is equal to 5.')
    })
})