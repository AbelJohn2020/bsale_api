CREATE DATABASE IF NOT EXISTS bsale_test;

USE bsale_test;

CREATE TABLE IF NOT EXISTS books (
	book_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	book_name VARCHAR(200) NOT NULL,
	url_image VARCHAR(500) NOT NULL,
	book_price FLOAT(6,2) UNSIGNED NOT NULL DEFAULT 15.00,
	book_discount INTEGER UNSIGNED,
	category_id INTEGER UNSIGNED
);

CREATE TABLE IF NOT EXISTS categories (
	category_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	category_name VARCHAR(200) NOT NULL 
);

DESCRIBE books;
DESCRIBE categories;

INSERT INTO books VALUES 
	(1, "Paper Towns", "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQeRTGD6Nu6dZYnUzOmaoaCvG-7AdDZQivtt1Rv-i-Yiv1RlCaA", 35.50, 0, 1),
    (2, "Carrie", "http://3.bp.blogspot.com/-kIrjzJKyto8/VWg4F7INVJI/AAAAAAAANqM/VqzVgLIaixA/s1600/carrie2013.jpg", 32.80, 0, 2),
    (3, "Me Before You", "https://images-na.ssl-images-amazon.com/images/I/51-Uk9%2BzA-L._SX300_SY300_QL70_FMwebp_.jpg", 45.50, 0, 3);

SELECT * FROM books;