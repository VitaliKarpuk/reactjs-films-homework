/* eslint-disable no-undef */
import adder from '../../src/adder'
describe('Adder', () => {
  test('adds two numbers', () => {
    expect(adder(5, 3)).toEqual(8)
  })
})