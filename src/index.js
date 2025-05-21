// Importa os módulos necessários
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const router = require('./router/routes');
const session = require('express-session');

const app = express(); // Cria uma instância do Express

// Configura o Express para aceitar JSON
app.use(express.json());

// Define o mecanismo de visualização como EJS
app.set('view engine', 'ejs');
// Define o diretório das views
app.set('views', path.resolve(__dirname, 'views'));

// Configura o body-parser para lidar com JSON e dados de formulários
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Configura a sessão do usuário
app.use(session({
    secret: 'secret', // Chave secreta para assinar a sessão
    resave: false, // Não salva a sessão se não houver modificações
    saveUninitialized: false // Não cria sessão até que algo seja armazenado
}));

// Rota para logout: destrói a sessão e redireciona para a página inicial
app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return console.log(err);
        }
        res.redirect('/');
    });
});

// Usa as rotas definidas no arquivo router
app.use(router);

// Inicia o servidor na porta 8080
app.listen(8080, () => {
    console.log("http://localhost:8080");
})