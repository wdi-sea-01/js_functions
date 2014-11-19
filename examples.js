//this function takes 2 numbers
//adds them together and returns the sum
var add = function(num1, num2){
	return num1 + num2;
};

//this function takes 2 numbers
//subtracts them and returns the difference
var subtract = function(num1,num2){
	return num1 - num2;
};

//add 2 numbers
console.log('add 1 + 2 = ');
console.log(add(1,2));
//adds 1 and 2 and returns 3
// outputs: 3

//output a blank line
console.log(' ');

//subtract 2 numbers
console.log('subtract 3 - 1 = ');
console.log(subtract(3,1));
//subtracts 1 from 3
//outputs: 2

//output a blank line
console.log(' ');

//calling functions in functions
console.log('add 1 + 2 = 3 ... subtract 3 - 1 = ');
console.log(subtract(add(1,2),1));
//outputs: 2