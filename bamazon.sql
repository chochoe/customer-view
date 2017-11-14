DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
 id INTEGER(20) AUTO_INCREMENT NOT NULL,
 product_name VARCHAR(30),
 department_name VARCHAR(30),
 price DECIMAL(10, 2),
 stock_quantity INTEGER(10),
 product_sales INTEGER(10),
 PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity, product_sales)
VALUES ("PS4", "Electronics", 400.00, 10, 0);

INSERT INTO products (product_name, department_name, price, stock_quantity, product_sales)
VALUES ("Snickers", "Candy", 0.75, 1000, 0);

INSERT INTO products (product_name, department_name, price, stock_quantity, product_sales)
VALUES ("Bike", "Sporting Goods", 200.00, 100, 0);

INSERT INTO products (product_name, department_name, price, stock_quantity, product_sales)
VALUES ("Bread", "Grocery", 2.00, 600, 0);

INSERT INTO products (product_name, department_name, price, stock_quantity, product_sales)
VALUES ("Tylenol", "Medicine", 7.00, 400, 0);

INSERT INTO products (product_name, department_name, price, stock_quantity, product_sales)
VALUES ("Levi's Jeans", "Men's Clothing", 30.00, 60, 0);

INSERT INTO products (product_name, department_name, price, stock_quantity, product_sales)
VALUES ("Wiper Blade", "Automotive", 10.00, 30, 0);

INSERT INTO products (product_name, department_name, price, stock_quantity, product_sales)
VALUES ("Tent", "Outdoor", 40.00, 25, 0);

INSERT INTO products (product_name, department_name, price, stock_quantity, product_sales)
VALUES ("Apples per pound", "Produce", 0.99, 450, 0);

INSERT INTO products (product_name, department_name, price, stock_quantity, product_sales)
VALUES ("Ninja Blender", "Small Appliances", 325.00, 50, 0);