DROP DATABASE IF EXISTS products_db;

CREATE DATABASE products_db;

USE products_db;

CREATE TABLE products
(
    item_id INTEGER(30)
    AUTO_INCREMENT NOT NULL,
    product_name VARCHAR
    (30),
    department_name VARCHAR
    (30),
    price DECIMAL
    (6,2),
    stock_quantity INTEGER
    (10),
    PRIMARY KEY
    (item_id)
);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Girl Backpack", "Fashion", 17.50, 35);
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Samsumg Gallaxy Tablet", "Electronics", 279.99, 10);
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Philips Shaver", "Beauty", 54.90, 42);
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Bullova Watch", "Accessories", 197.50, 5);
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("JBL Headphones", "Electronics", 49.50, 12);
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Javascript Guide", "Books", 37.97, 17);
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Women's Flet Sandals", "Shoes", 17.50, 38);
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Kitchen Weight Scale", "Home&Kitchen", 19.90, 26);
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("LEGO Toy Story", "Toys&Games", 111.99, 17);
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Women's Dress", "Fashion", 37.50, 22);

    SELECT *
    from products;