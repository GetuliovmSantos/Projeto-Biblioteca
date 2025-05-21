const mysql = require("mysql");

/**
 * Cria uma conexão com o banco de dados MySQL usando as configurações fornecidas.
 *
 * @constant
 * @type {import('mysql').Connection}
 * @property {string} host - O endereço do servidor MySQL.
 * @property {number} port - A porta utilizada para conexão com o MySQL.
 * @property {string} user - O nome de usuário para autenticação no banco de dados.
 * @property {string} password - A senha para autenticação no banco de dados.
 * @property {string} database - O nome do banco de dados a ser utilizado.
 */
const connection = mysql.createConnection({
    host: "localhost",
    port: 3307,
    user: "root",
    password: "",
    database: "biblioteca"
})

module.exports = connection;