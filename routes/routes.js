const Router = require("express")

const shopcont = require('../controller/controller')

const router = Router()

router.get('/',shopcont.page)

module.exports = router