const {Router} = require("express")
const router = Router()

const homeController = require('../controller/homeController')

router.get('/', homeController.home)

module.exports = router