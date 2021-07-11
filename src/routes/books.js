const express = require("express");
const router = express.Router();

const mysqlConnection = require("../db/db");

router.get("/", (req, res) => {
    mysqlConnection.query('SELECT * FROM books', (error, rows, fields) => {
        if(!error) {
            res.json(rows);
        } else {
            console.log(error);
        }
    })
})

module.exports = router;