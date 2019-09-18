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
  showTable();
});

// This function will show in the terminal the table products from the db:
function showTable() {
  connection.query(
    "SELECT item_id, product_name, department_name, price FROM products",
    function(err, rows) {
      if (err) throw err;
      console.log("");
      console.log("========== BAMAZON STORE - SELECT PRODUCTS ==========");
      console.table(rows);
      console.log("=====================================================");
      questions();
    }
  );
}

// This function prompts the user for their purchase choices:
function questions() {
  inquirer
    .prompt([
      {
        name: "itemId",
        type: "input",
        message: "Please, enter the ID of the product that you want to buy."
      },
      {
        name: "quantity",
        type: "input",
        message: "Please, enter the quantity of the choosen product."
      }
    ])
    .then(function(answer) {
      connection.query(
        "SELECT item_id, price, stock_quantity FROM products WHERE item_id = " +
          answer.itemId,
        function(err, row) {
          if (err) throw err;
          //console.log(parseInt(row[0].stock_quantity));
          if (row[0].stock_quantity >= parseInt(answer.quantity)) {
            connection.query(
              "UPDATE products SET stock_quantity = stock_quantity - " +
                answer.quantity +
                " WHERE item_id = " +
                answer.itemId
            );
            console.log(
              "Your total purchase is US$ " +
                row[0].price * parseInt(answer.quantity) +
                "."
            );
          } else {
            console.log("Insufficient quantity!");
          }
        }
      );
    });
}

// TODO: use connection.end();
