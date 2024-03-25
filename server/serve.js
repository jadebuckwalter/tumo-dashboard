const dotenv = require("dotenv");
dotenv.config();

const http = require("http");
const mysql = require("mysql");
const express = require("express");
const path = require("path");
const api = require("./api")
const bodyParser = require("body-parser");

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
connection.connect();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", api);
const reactPath = path.resolve(__dirname, "..", "client", "dist");
app.use(express.static(reactPath))

app.get("/api/", (req, res) => {
    res.send("You have accessed the API");
});

app.use(express.json());

app.get("*", (req, res) => {
    res.sendFile(path.join(reactPath, "index.html"));
});

const server = http.createServer(app);
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});