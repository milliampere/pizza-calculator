const pizza = require('../src/pizza');

describe('pizza', () => {

  test('if no people, return', () => {
    expect(pizza.calculatePizza(0)).toBeFalsy();
  })

  test('if people 5, return 3 pizzas', () => {
   const test = pizza.calculatePizza(5);
    expect(test).toBe(3);
  })

  test('if people 2, return 1 pizzas', () => {
    const test = pizza.calculatePizza(2);
     expect(test).toBe(1);
   })

   test('if x number of people, return x number of pizzas', () => {
    const test = pizza.calculatePizza(7);
     expect(test).toBe(4);
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


