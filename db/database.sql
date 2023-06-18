CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE IF NOT EXISTS employees(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    salary INT(11) DEFAULT NULL,
    PRIMARY KEY(id)
);

INSERT INTO employees(name, salary) VALUES
    ('John Doe', 2000),
    ('Jane Doe', 3000),
    ('John Smith', 4000),
    ('Jane Smith', 5000);



DESC employees;