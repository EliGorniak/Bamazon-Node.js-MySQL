DROP DATABASE IF EXISTS products_db;

CREATE DATABASE products_db;

USE products_db;

CREATE TABLE products
(
    item_id INT NOT NULL
    AUTO_INCREMENT,
    product_name VARCHAR
    (100) NOT NULL,
    department_name VARCHAR
    (100) NOT NULL,
    price DECIMAL
    (6,2) NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY
    (item_id)
);


    INSERT INTO products
        (product_name, department_name, price)
    VALUES
        ("vanilla", 2.50, 100);


    SELECT *
    from top_songs;