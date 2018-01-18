module.exports = {
  calculatePizza(people) {
    return 0;
  },

  calculate1lDrink(people) {
    const liter = people * 0.5; // 2.5

    const roundUp = Math.ceil(liter); // 3
    const resultOfMod = roundUp % 2; // 1

    let drink1l = false;

    if (resultOfMod === 1) {
      drink1l = true;
    } else {
      drink1l = false;
    }

    return drink1l;
  },

  calculate2lDrink(people) {
    const liter = people * 0.5;
    const drinks = Math.floor(liter / 2);
    return drinks;
  }

	calculatePizza(people){

	if (people === 0){
		return ;
	}
	else if(people %2 === 0){
		return people/2;
	}
	else if(people %2 === 1){
		return Math.ceil(people/2);
	}

	}
};
