const mysql = require('mysql2/promise');

require('dotenv').config();
const MYSQL_HOST = process.env.MYSQL_HOST;
const MYSQL_USER = process.env.MYSQL_HOST;
const MYSQL_PASSWORD = process.env.MYSQL_HOST;
const MYSQL_DB = process.env.MYSQL_HOST;

const connection = mysql.createPool({
    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DB,
});

module.exports = connection;