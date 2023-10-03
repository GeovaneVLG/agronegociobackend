const mysql = require('mysql2');

require('dotenv').config();
const MYSQL_HOST = process.env.MYSQL_HOST;
const MYSQL_USER = process.env.MYSQL_USER;
const MYSQL_PASSWORD = process.env.MYSQL_PASSWOR;
const MYSQL_DB = process.env.MYSQL_DB;
const MYSQL_PORT = process.env.MYSQL_PORT;

const connection = mysql.createPool({
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DB,
});

module.exports = connection;