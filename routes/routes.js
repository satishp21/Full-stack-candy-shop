const Router = require("express")

const shopcont = require('../controller/controller')

const router = Router()

router.get('/get-candies',shopcont.getcandies)

router.get('/',shopcont.page)

router.post('/add-candy',shopcont.addcandy)

module.exports = router