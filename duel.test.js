const duel = require('./shifumi')

test('scissors tie', () => {
    expect(duel("scissors", "scissors")).toBe("tie")
})

test('paper tie', () => {
    expect(duel("paper", "paper")).toBe("tie")
})

test('rock tie', () => {
    expect(duel("rock", "rock")).toBe("tie")
})

test('rock scissors', () => {
    expect(duel("rock", "scissors")).toBe("p1 won")
})

test('scissors rock', () => {
    expect(duel("scissors", "rock")).toBe("p2 won")
})

test('rock paper', () => {
    expect(duel("rock", "paper")).toBe("p2 won")
})

test('paper rock', () => {
    expect(duel("paper", "rock")).toBe("p1 won")
})

test('paper scissors', () => {
    expect(duel("paper", "scissors")).toBe("p2 won")
})

test('scissors paper', () => {
    expect(duel("scissors", "paper")).toBe("p1 won")
})