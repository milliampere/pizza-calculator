module.exports = {

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

}
