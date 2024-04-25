let whoWon = require('../RPS')

describe('whoWon()', function () {

    test('returns correct response when players tie', function () {
        let output = whoWon('rock', 'rock')
        expect(output).toBe('TIE!')
    })
    test('returns correct response when player1 inputs a wining hand', function () {
        let output1 = whoWon('rock', 'scissors')
        let output2 = whoWon('paper', 'rock')
        let output3 = whoWon('scissors', 'paper')
        expect(output1).toBe('Player 1 wins!')
        expect(output2).toBe('Player 1 wins!')
        expect(output3).toBe('Player 1 wins!')
    })
    test('returns correct response when player2 inputs a wining hand', function () {
        let output1 = whoWon('scissors', 'rock')
        let output2 = whoWon('rock', 'paper')
        let output3 = whoWon('paper', 'scissors')
        expect(output1).toBe('Player 2 wins!')
        expect(output2).toBe('Player 2 wins!')
        expect(output3).toBe('Player 2 wins!')
    })
})