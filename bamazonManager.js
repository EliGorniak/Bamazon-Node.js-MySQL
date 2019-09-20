// Variables to require NPM Packages:
const mysql = require("mysql");
const inquirer = require("inquirer");

// Variable the connection information for the sql db:
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "products_db"
});

// Connect to the mysql server and sql db:
connection.connect(function(err) {
  if (err) throw err;
  // Run the showProducts function after the connection:
  menu();
});

// Function to show the table of products:
function viewProducts() {
  connection.query("SELECT * FROM products", function(err, rows) {
    if (err) throw err;
    console.log("");
    console.table(rows);
    console.log("=====================================================");
    menu();
  });
}

// Function to show the table of products under 5 units in stock:
function viewLowInventory() {
  connection.query("SELECT * FROM products WHERE stock_quantity < 5", function(
    err,
    rows
  ) {
    if (err) throw err;
    if (rows.length === 0) {
      console.log("There are no products with stock lower than five units.");
    } else {
      console.log("");
      console.table(rows);
      console.log("=====================================================");
    }
    menu();
  });
}

// Function to add more quantity to the table of products:
function addToInventory() {
  inquirer
    .prompt([
      {
        name: "itemId",
        type: "input",
        message: "Please, enter the ID of the product that you want add more:"
      },
      {
        name: "quantity",
        type: "input",
        message: "Please, enter the quantity:"
      }
    ])
    .then(function(answerInventory) {
      connection.query(
        "UPDATE products SET stock_quantity = stock_quantity + " +
          answerInventory.quantity +
          " WHERE item_id = " +
          answerInventory.itemId
      );
      viewProducts();
    });
}

// Function to add more producs to the database/table:
function addNewProduct() {
  inquirer
    .prompt([
      {
        name: "productname",
        type: "input",
        message: "Please, enter the name of the product:"
      },
      {
        name: "department",
        type: "input",
        message: "Please, enter the department:"
      },
      {
        name: "price",
        type: "input",
        message: "Please, enter the price:"
      },
      {
        name: "stock",
        type: "input",
        message: "Please, enter the quantity:"
      }
    ])
    .then(function(answerNewProduct) {
      connection.query(
        "INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('" +
          answerNewProduct.productname +
          "','" +
          answerNewProduct.department +
          "', " +
          answerNewProduct.price +
          ", " +
          answerNewProduct.stock +
          ")"
      );
      viewProducts();
    });
}

// This function will show the menu for manager and runs every command based in the user inputs:
function menu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "inventory",
        message: "Select the options below to manage the inventory:",
        choices: [
          "View products available for sale.",
          "View low inventory.",
          "Add new quantitites to inventory.",
          "Add new products to products database."
        ]
      }
    ])
    .then(function(answer) {
      if (answer.inventory === "View products available for sale.") {
        viewProducts();
      } else if (answer.inventory === "View low inventory.") {
        viewLowInventory();
      } else if (answer.inventory === "Add new quantitites to inventory.") {
        addToInventory();
      } else if (
        answer.inventory === "Add new products to products database."
      ) {
        addNewProduct();
      }
    });
}
