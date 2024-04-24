/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  //create an object to store total spent on each category
  const categoryTotal = {};
  //iterate over transcations
  transactions.forEach((el) => {
    const { category, price } = el;
      // If the category already exists in categoryTotal, add the price to it, otherwise initialize it with price
    if (categoryTotal[category]) {
      categoryTotal[category] += price;
    } else {
      categoryTotal[category] = price;
    }

  });

    // Convert the categoryTotal object to an array of objects
  const result = Object.entries(categoryTotal).map(([category, totalSpent]) => ({
    category,
    totalSpent
}));
  return result;
}

module.exports = calculateTotalSpentByCategory;
