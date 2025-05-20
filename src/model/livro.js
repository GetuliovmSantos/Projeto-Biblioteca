const connection = require('../database/connection');
const session = require('express-session');

module.exports = {
    getUser: (email, password) => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM usuarios WHERE email = "${email}" and senha = ${password};`,
                (error, results) => {
                    if (error) {
                        reject(error);
                        console.log(error);
                        return;
                    } else if (results.length === 0) {
                        reject(new Error("Use not found!"));
                        return;
                    }

                    const user = results[0];
                    console.log(user.id_usuario);

                    session.id_user = user.id_usuario;
                    session.name = user.nome;

                    console.log(`Welcome: ${user}`)

                    resolve(user);
                }

            );
        });
    },
    getLivros: () => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM livros',
                (error, results) => {
                    if (error) {
                        reject(error);
                        return;
                    }
                    console.log(results);
                    resolve(results);
                }
            );
        });
    },
    createLivro: (titulo, autor, categoria, ano, editora) => {
        return new Promise((resolve, reject) => {
            connection.query(`INSERT INTO livros (titulo, autor, categoria, ano_publicacao, editora) VALUES ("${titulo}", "${autor}", "${categoria}", ${ano}, "${editora}");`,
                (error, results) => {
                    if (error) {
                        reject(error);
                        return;
                    }
                    console.log(results);
                    resolve(results);
                }
            );
        });
    },
    getLivro: (id) => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM livros WHERE id_livro = ${id};`,
                (error, results) => {
                    if (error) {
                        reject(error);
                        return;
                    }
                    console.log(results);
                    resolve(results[0]);
                }
            );
        });
    },
    updateLivro: (id, titulo, autor, categoria, ano, editora) => {
        return new Promise((resolve, reject) => {
            connection.query(`UPDATE livros SET titulo = "${titulo}", autor = "${autor}", categoria = "${categoria}", ano_publicacao = ${ano}, editora = "${editora}" WHERE id_livro = ${id};`,
                (error, results) => {
                    if (error) {
                        reject(error);
                        return;
                    }
                    console.log(results);
                    resolve(results);
                }
            );
        });
    },
    deleteLivro: (id) => {
        return new Promise((resolve, reject) => {
            connection.query(`DELETE FROM livros WHERE id_livro = ${id};`,
                (error, results) => {
                    if (error) {
                        reject(error);
                        return;
                    }
                    console.log(results);
                    resolve(results);
                }
            );
        });
    }
};