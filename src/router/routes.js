// Importação do Router do Express
const Router = require("express");
const router = Router();

// Importação dos controllers
const homeController = require('../controller/homeController');
const loginController = require("../controller/loginController");
const livroController = require('../controller/livroController');

// Rotas GET
router.get('/', homeController.home); // Página inicial
router.get('/main', loginController.main); // Página principal após login
router.get('/livro/form/create', livroController.formCreateLivro); // Formulário para criar livro
router.get('/livro/form/update/:id', livroController.formUpdateLivro); // Formulário para atualizar livro
router.get('/livro/delete/:id', livroController.deleteLivro); // Deletar livro

// Rotas POST
router.post('/login', loginController.authentication); // Autenticação de login
router.post('/livro/createLivro', livroController.createLivro); // Criar livro
router.post('/livro/updateLivro/:id', livroController.updateLivro); // Atualizar livro

// Exportação do router
module.exports = router;