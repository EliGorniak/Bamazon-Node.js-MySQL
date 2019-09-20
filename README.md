# Bamazon-Node.js-MySQL

Bamazon is an Amazon-like storefront made with MySQL and Node.js. 

---

### Video Demo of the App

Clck here to see the demo video: https://drive.google.com/file/d/18jJ0tHa97ZXvMUzzNx49mfq_vwG-jM5U/view

---

### Brief Description

Bamazon was constructed using Nodejs to get the user requests by the command line inputs and gives back informations about products, quantities and price from a database, using MySQL Workbench.
Bamazon uses too NPM packages.

---

### Technologies

##### Javascript
##### Node.js
##### MySQL Workbench 
##### NPM Packages: 
* MySQL
* Enquire
* Colors

---

### How Bamazon Works

Bamzon code is organized in 3 different files:

#### A. bamazon.sql:
The first part of this project was build a database Amazon-like storefront with the MySQL.
The table has at least 10 different itens, with columns: item_id, product_name, department_name, price, stock_quantity.


#### B. bamazonCustomer.js:
This code intent to have an interaction with the customer.
This file contains the code that will show the table of products avaiable to purchase, and ask the user 2 messages:
- "Please, enter the ID of the product that you want to buy."
- "Please, enter the quantity of the choosen product."
When the user inputs the ID and the quantity, the app will return 2 cenarios:
- if the quantity in stock is sufficient, the user will see the total cost of their purchase.
- If the quantity in stock is insufficient, the user will see the message "Insufficient quantity!" and the purchase is not possible to  going through.

#### C. bamazonManager.js:
Ths code intent to have an interaction with the manager of the store.
This file contains the code that will ask 4 options to the manager:
- If a manager selects "View Products for Sale", the app will show the table of product avaiable in store.
- If a manager selects "View Low Inventory", the app wil show the table with the items lower than five in stock.
- If a manager selects "Add new quantities to Inventory", the app will allow the manager to chose the item by ID and add the quantity of that item.
- If a manager selects "Add New Products to Database", the app wil allow the manager to include new products to the list, by typing the name, departament, price e quantity.

---
