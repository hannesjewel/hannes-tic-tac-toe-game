import { test, expect } from 'vitest'
import Game from '../src/Game'

const game = new Game()

test('player X first turn and disable selected cell', () => {
    game.onSelect(0)
    expect(game.x).toContain(0)
    expect(game.disabled).toContain(0)
    
})

test('player O first turn and disable selected cell', () => {
    game.onSelect(1)
    expect(game.o).toContain(1)
    expect(game.disabled).toContain(1)
})

test('selected cells disabled', () => {
    expect(game.checkIfDisabled(0)).toBeTruthy()
    expect(game.checkIfDisabled(1)).toBeTruthy()
})

test('not complete', () => {
    expect(game.status).toBeNull()
})

test('player X wins', () => {
    game.onSelect(8)
    game.onSelect(2)
    game.onSelect(4)
    expect(game.status).toBe('X Wins')
})

test('restart game', () => {
    game.restart()
    expect(game.status).toBeNull()
    expect(game.disabled).toEqual([])
    expect(game.x).toEqual([])
    expect(game.o).toEqual([])
    expect(game.turn).toBe('x')
})

test('player X wins', () => {
    game.onSelect(4)
    game.onSelect(0)
    game.onSelect(2)
    game.onSelect(6)
    game.onSelect(8)
    game.onSelect(1)
    game.onSelect(5)
    expect(game.status).toBe('X Wins')
    game.restart()
})

test('tie', () => {
    game.onSelect(4)
    game.onSelect(0)
    game.onSelect(2)
    game.onSelect(6)
    game.onSelect(3)
    game.onSelect(5)
    game.onSelect(7)
    game.onSelect(1)
    game.onSelect(8)
    expect(game.status).toBe(`It's a Tie`)
})