import CellState from '../CellState'

test('It should have ALIVE state', () => {
    expect(CellState.ALIVE).toBe(1)
})

test('It should have DEAD state', () => {
    expect(CellState.DEAD).toBe(0)
})
