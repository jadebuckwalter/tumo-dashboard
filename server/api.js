const express = require("express");
const mysql = require("mysql");
require("dotenv").config();

const router = express.Router();
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
connection.connect((err) => {
    if (err) throw err;
});

router.post("/all-students", (req, res) => {
    const query = "SELECT * FROM students";
    connection.query(query, [], (err, rows) => {
        if (err) throw err;
        res.end(JSON.stringify(rows));
    });
});

router.post("/search-username", (req, res) => {
    const query = "SELECT * FROM students WHERE username = ?";
    connection.query(query, [req.body.username], (err, rows) => {
        if (err) throw err;
        res.end(JSON.stringify(rows));
    });
});

router.post("/search-name", (req, res) => {
    const query = "SELECT * FROM students WHERE first = ? AND last = ?";
    // Assume there is only one space in the name, and that it separates first and last
    const space = req.body.name.indexOf(" ");
    const values = [req.body.name.substring(0, space), req.body.name.substring(space + 1)];
    connection.query(query, values, (err, rows) => {
        if (err) throw err;
        res.end(JSON.stringify(rows));
    });
});

router.post("/create-profile", (req, res) => {
    const query = "INSERT INTO students (first, last, username, password, email) VALUES (?, ?, ?, ?, ?)";
    const values = [req.body.first, req.body.last, req.body.username, req.body.password, req.body.email];
    connection.query(query, values, (err, rows) => {
        if (err) throw err;
        res.end(JSON.stringify(rows));
    });
});

router.post("/edit-profile", (req, res) => {
    const query = "UPDATE students SET first = ?, last = ?, username = ?, password = ?, email = ? WHERE id = ?";
    const values = [req.body.first, req.body.last, req.body.username, req.body.password, req.body.email, req.body.id];
    connection.query(query, values, (err, rows) => {
        if (err) throw err;
        res.end(JSON.stringify(rows));
    });
});

module.exports = router;