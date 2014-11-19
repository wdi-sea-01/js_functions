//load products.json
var data = require("./products.json")

//define getItemsCount function
//accepts full item data
//returns the length of the items array
var getItemsCount = function(itemData){
	return itemData.items.length;
};

//output item count using the getItemsCount function
console.log('Item Count: ' + getItemsCount(data));

//create your answer in this file.
//the above is just provided as a simple example.