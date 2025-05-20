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
        })
    },

}