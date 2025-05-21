// Importa a conexão com o banco de dados
const connection = require('../database/connection');
// Importa o módulo de sessão do Express (não está sendo usado corretamente)
const session = require('express-session');

module.exports = {
    // Busca um usuário pelo email e senha
    getUser: (email, password) => {
        return new Promise((resolve, reject) => {
            // Consulta SQL para buscar o usuário
            connection.query(`SELECT * FROM usuarios WHERE email = "${email}" and senha = ${password};`,
                (error, results) => {
                    if (error) {
                        // Em caso de erro na consulta, rejeita a Promise
                        reject(error);
                        console.log(error);
                        return;
                    } else if (results.length === 0) {
                        // Se não encontrar usuário, rejeita a Promise
                        reject(new Error("Use not found!"));
                        return;
                    }

                    // Usuário encontrado
                    const user = results[0];
                    console.log(user.id_usuario);

                    // Armazena informações do usuário na sessão (não recomendado dessa forma)
                    session.id_user = user.id_usuario;
                    session.name = user.nome;

                    console.log(`Welcome: ${user}`)

                    // Resolve a Promise com o usuário encontrado
                    resolve(user);
                }
            );
        });
    },

    // Retorna todos os livros cadastrados
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

    // Cria um novo livro no banco de dados
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

    // Busca um livro pelo ID
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

    // Atualiza os dados de um livro pelo ID
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

    // Remove um livro pelo ID
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