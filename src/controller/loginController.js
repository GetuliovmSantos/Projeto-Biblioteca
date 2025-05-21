// Importa o modelo Livro, bcrypt para hash de senha e express-session para sessões
const Livro = require('../model/livro');
const bcrypt = require('bcryptjs');
const session = require('express-session');

module.exports = {
    // Função de autenticação do usuário
    authentication: async (req, res) => {
        const email = req.body.email; // Obtém o email do corpo da requisição
        const password = req.body.password; // Obtém a senha do corpo da requisição

        console.log(`email: ${email} | password: ${password}`); // Log para debug

        try {
            // Busca o usuário no banco de dados
            const user = await Livro.getUser(email, password);

            console.log(user); // Log do usuário encontrado

            if(user){
                // Se usuário existe, redireciona para a página principal
                res.redirect('/main');
            }else {
                // Se não existe, retorna mensagem de erro
                res.send("Email or Password incorrect!");
            }
        }catch(error){
            // Em caso de erro, loga e retorna erro 500
            console.log("Error: ", error);
            res.status(500).send("Error");
        }
    },
    // Função para renderizar a página principal
    main: async (_, res) => {
        // Verifica se o usuário está logado pela sessão
        if(!session.id_user){
            return res.redirect('/');
        }

        // Busca todos os livros
        const livros = await Livro.getLivros();
        // Renderiza a página principal com o nome do usuário e os livros
        res.render(
            'livro/main',
            {
                nome: session.name,
                livros: livros
            }
        );
    }
};