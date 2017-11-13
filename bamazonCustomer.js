// minimum assignment requirements
// create node app on this file prompting to ask for what item to buy and how many
// once above questions entered, check to see if enough of product is available
// if enough of item, update database and show total cost
// if quantity not enough, log error nessage and prevent order completion
// write readme for this assignment



// in case above part completed within alloted time (might only complete up to this is all goes well enough)
// have manager view with menu options consisting of products for sale, low inventory, add to inventory, and add new product
// products for sale should list ID, name, price, and quantity of each item
// low inventory should show items with quantity lower than 5
// add to inventory should display prompt to add more of that item
// add new product to allow addition of new item

var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '3Ar7y81rd',
  database : 'bamazon'
});
 
// showProducts();

// show products available (choices)
// get choice from user
// get quantity from user

// if (stockQuantity > quantity) subtract stockQuantity by quantity and multply quantity by item price
// else  tell user not enough of item is in stock
connection.connect();

function showProducts() {
	
	connection.query('SELECT * FROM products', function (error, results) {
	  if (error) throw error;
	  console.log('The solution is: ', results);
	});
	// connection.end();
}

function updateQuantity(productId, quantity) {
	// connection.connect();
	var queryString = 'UPDATE products SET stock_quantity='+quantity.toString()+' WHERE id='+productId;
	console.log(queryString);
	connection.query(queryString, function (error, results) {
	  if (error) throw error;
	  console.log('The solution is: ', results);
	});

}


// updateQuantity(1, 20);

connection.end();