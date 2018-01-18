const pizza = require('../src/pizza');

describe('pizza', () => {

  test('if no people, return 0', () => {
    pizza.calculatePizza();
    expect(pizza.calculatePizza()).toBe(0);
  })

})

describe('drinks', () => {

  test('if no people, return 0', () => {
    expect(pizza.calculate1lDrink(0)).toBe(false);
  })

  test('if five people, return true', () => {
    const result = pizza.calculate1lDrink(5);
    expect(result).toBe(true);
  })

  test('if five people, return 1', () => {
    const result = pizza.calculate2lDrink(5);
    expect(result).toBe(1);
  })

})


