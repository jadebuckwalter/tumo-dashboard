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

-- Create a few profiles
INSERT INTO students (first, last, username, password, email) VALUES ("Ada", "Lovelace", "alovelace", "password", "lovelace@mit.edu");
INSERT INTO students (first, last, username, password, email) VALUES ("Charles", "Babbage", "babbage", "abcdefg", "babbage@mit.edu");
INSERT INTO students (first, last, username, password, email) VALUES ("Grace", "Hopper", "gracehopper", "12345678", "ghopper@mit.edu");
INSERT INTO students (first, last, username, password, email) VALUES ("Alan", "Turing", "aturing", "machine", "aturing@mit.edu");