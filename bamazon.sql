DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
 id INTEGER(20) AUTO_INCREMENT NOT NULL,
 product_name VARCHAR(30),
 department_name VARCHAR(30),
 price DECIMAL(10, 2),
 stock_quantity INTEGER(10),
 PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("PS4", "Electronics", 400.00, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Snickers", "Candy", 0.75, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bike", "Sporting Goods", 200.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bread", "Grocery", 2.00, 600);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tylenol", "Medicine", 7.00, 400);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Levi's Jeans", "men's clothing", 30.00, 60);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wiper Blade", "automotive", 10.00, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tent", "outdoor", 40.00, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Apples per pound", "produce", 0.99, 450);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ninja Blender", "small appliances", 325.00, 50);