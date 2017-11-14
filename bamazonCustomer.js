var inquirer = require('inquirer');
var mysql = require('mysql');
var Table = require('cli-table');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'your-password',
  database : 'bamazon'
});
 
connection.connect(function(err) {

  if (err) {
    return console.log(err);
  }

  connection.query("SELECT * FROM products", function(err, res) {
   
    if (err) {
      return console.log(err);
    }
  
    console.log("Welcome to Bamazon!");
   
    var table = new Table({
      head: ["Item ID", "Product Name", "Price"],
      style: {
        head: ['red'],
        compact: false,
        colAligns: ['center'],
      }
    });
    
    for (var i = 0; i < res.length; i++) {
      table.push([
        res[i].id, res[i].product_name, res[i].price
      ]);
    }
  
    console.log(table.toString());
    
    inquirer.prompt([
     
      {
        type: "input",
        name: "item",
        message: "What do you want to buy? Please enter the ID of that item."
      },
      {
        type: "input",
        name: "quantity",
        message: "How many do you want to buy?"
      }

    ]).then(function(response) {

      var id = Number(response.item);
      var quantity = Number(response.quantity);
      var stockQuantity = Number(res[Number(response.item - 1)].stock_quantity);
      var price = Number(res[Number(response.item - 1)].price);
      var inventory = stockQuantity - quantity;
      var productName = res[Number(response.item - 1)].product_name;
      var total_sales = Number(res[Number(response.item - 1)].product_sales);
      var product_sales = (quantity * price) + total_sales;
   
      if (quantity > stockQuantity && stockQuantity > 0) {
        return console.log("Insufficient quantity! Please choose a different quantity for this item.");
      } else if (stockQuantity <= 0) {
        return console.log("This item is currently out of stock! Sorry for the inconvenience. Please check back later.");
      } else {
      
        inquirer.prompt([

          {
            type: "confirm",
            name: "confirm",
            message: "Your total is $" + (quantity * price) + ". Would you like to buy this item?"
          }

        ]).then(function(response) {
      
          if (response.confirm === true) {
            var update = "UPDATE products SET stock_quantity = " + inventory + ", product_sales = " + product_sales + " WHERE id = " + id;
            connection.query(update, function(err, res) {
              if (err) {
                return console.log(err);
              }
              console.log("Thank you for buying " + quantity + " " + productName);
            });
          } else {
            console.log("Thank you for choosing Bamazon! See you again soon!");
          }
      
        });
    
      }
   
    });
 
  });

});
