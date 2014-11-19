#JavaScript Functions


Using the google shoping data from the previous exercise (also included in this repository) create some useful functions to answer the following questions.

Tip: for some of these you can re-use some of the code you created in the previous exercise.

##Examples

Below are some examples of some basic functions. This example is also included in the repository as examples.js so you can execute it.


```

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

console.log(add(1,2));
//adds 1 and 2 and returns 3
// outputs: 3

console.log(subtract(3,1));
//subtracts 1 from 3
//outputs: 2

//calling functions in functions
console.log(subtract(add(1,2),1));
//outputs: 2

```

#Problems

##1.) getItems(array)

Create a function called `getItems` that simply returns the items array from the google product object.


##2.) getItemsByBrand(array, brand)
Create a function called `getItemsByBrand` that takes an item array returns a new array of all items of a specified brand.

Test this function by searching for Sony, Cannon, Nikon and Panasonic.


##3.) getItemsByAuthor(array, author)
Create a function called `getItemsByAuthor` that takes an item array and returns a new array of all items by a specified author.

Test this function by searching for Target, CDW, eBay

##4.) getAvailableProducts(array)
Create function called `getAvailableProducts` that takes an item array and returns an array containing all of the available products (an available product is one with at least one availability of "inStock" in the inventories array)



##5.) Use your functions
Use the functions you created in 1 - 5 to print find the following lists of items.

 * All items made by Nikon with the author eBay.
 * All items made by Sony.
 * All items made by Sony that are available.

**BONUS:** Create another search function and/or think of other interesting ways to combine the functions to preform useful searches.

