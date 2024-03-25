CREATE DATABASE IF NOT EXISTS tumodashboard;
USE tumodashboard;

CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT,
    first varchar(255),
    last varchar(255),
    username varchar(255),
    password varchar(255),
    email varchar(255),
    PRIMARY KEY(id)
);