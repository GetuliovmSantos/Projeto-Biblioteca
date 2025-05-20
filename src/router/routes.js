const {Router} = require("express")
const router = Router()

const homeController = require('../controller/homeController')
const loginController = require("../controller/loginController")
const livroController = require('../controller/livroController')

router.get('/', homeController.home)
router.get('/main', loginController.main)
router.get('/livro/form/create', livroController.formCreateLivro)
router.get('/livro/form/update/:id', livroController.formUpdateLivro)
router.get('/livro/delete/:id', livroController.deleteLivro)

router.post('/login', loginController.authentication)
router.post('/livro/createLivro', livroController.createLivro)
router.post('/livro/updateLivro/:id', livroController.updateLivro)

module.exports = router