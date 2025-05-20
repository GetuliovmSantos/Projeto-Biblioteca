const {Router} = require("express")
const router = Router()

const homeController = require('../controller/homeController')
const loginController = require("../controller/loginController")

router.get('/', homeController.home)

router.post('/login', loginController.authentication)

module.exports = router