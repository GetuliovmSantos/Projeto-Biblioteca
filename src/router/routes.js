const {Router} = require("express")
const router = Router()

const homeController = require('../controller/homeController')
const loginController = require("../controller/loginController")
const livroController = require('../controller/livroController')

router.get('/', homeController.home)
router.get('/main', loginController.main)
router.get('/livro/form/create', livroController.formCreateLivro)

router.post('/login', loginController.authentication)
router.post('/livro/createLivro', livroController.createLivro)

module.exports = router