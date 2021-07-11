const express = require("express");
const router = express.Router();

const mysqlConnection = require("../db/db");

router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM books', (error, rows, fields) => {
        if(!error) {
            res.json(rows);
        } else {
            console.log(error);
        }
    })
});

router.get('/:book_id', (req, res) => {
    const { book_id } = req.params;
    mysqlConnection.query('SELECT * FROM books WHERE book_id = ?', [book_id], (error, rows, fields) => {
        if(!error) {
            res.json(rows);
        } else {
            console.log(error);
        }
    });
});

        // SET @book_id = ?;
        // SET @book_name = ?;
        // SET @url_image = ?;
        // SET @book_price = ?;
        // SET @book_discount;
        // SET @category_id;

router.post('/', (req, res) => {
    const { book_id, book_name, url_image, book_price, book_discount, category_id } = req.body;
    const query =  `
        CALL addBookOrEdit(?, ?, ?, ?, ?, ?);
    `;
    mysqlConnection.query(query, [ book_id, book_name, url_image, book_price, book_discount, category_id ], (error, rows,  fields) => {
        if(!error) {
            res.json({Status: 'Book saved'});
        } else {
            console.log(error);
        }
    });
});

router.put('/:book_id', (req, res) => {
    const { book_name, url_image, book_price, book_discount, category_id } = req.body;
    const { book_id } = req.params;
    const query = 'CALL addBookOrEdit(?, ?, ?, ?, ?, ?)';

    mysqlConnection.query(query, [ book_id, book_name, url_image, book_price, book_discount, category_id], (error, rows, fields) => {
        if(!error) {
            res.json({Status: 'Book updated'});
        } else {
            console.log(error);
        }
    });
});

router.delete('/:book_id', (req, res) => {
    const { book_id } = req.params;
    mysqlConnection.query('DELETE FROM books WHERE book_id = ?', [book_id], (error, rows, fields) => {
        if(!error) {
            res.json({Status: 'Book deleted'});
        } else {
            console.log(error);
        }
    });
});

module.exports = router;