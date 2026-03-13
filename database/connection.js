const mariadb = require("mariadb");

const pool = mariadb.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "aegis_bot",
    connectionLimit: 5
});

module.exports = pool;
