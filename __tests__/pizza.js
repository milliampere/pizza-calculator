const pizza = require('../src/pizza');

describe('pizza', () => {

  test('if no people, return 0', () => {
    pizza.calculatePizza();
    expect(pizza.calculatePizza()).toBe(0);
  })

})

