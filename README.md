# Bamazon Customer View

## About Bamazon

This is a node application using a command-line interface and a MySQL database. Bamazon consists of displaying product information and keeping track of inventory after purchases are made.

## Starting the Application

To run this application, you need to open up a command-line interface program such as Bash. Next, you would navigate to the repository's folder after downloading it onto your computer. Then, you would enter the word 'node' and the respective JavaScript file that contains the node application. After that, the application should start running.

## Running the Application

Once the application is run, you will see a table of products by name, with an ID number and price for each respective item. At the same time, one question appears, which asks you for the ID number of the item you want to buy. After you choose the item's ID number, you will be asked how many of that item you want to buy. If your quantity doesn't exceed the available quantity, a total price will be calculated, and a yes/no question will ask you to confirm your choice. If you choose yes, the application will thank you for your purchase of that item and ends the transaction.

![Purchase Complete](/images/buying-amount-ok.png)

If you say no to this confirmation, the application will thank you for shopping at Bamazon and ends the transaction.

![Excess Quantity](/images/buying-too-many.png) 

If your chosen quantity exceeds the avilable quantity, the application will say that it has an insufficient quantity of that item and ends the transaction.

![Cancel Purchase](/images/confirmation-as-no.png)