const Router = require("express")

const shopcont = require('../controller/controller')

const router = Router()

router.get('/get-candies',shopcont.getcandies)

router.get('/',shopcont.page)

router.post('/add-candy',shopcont.addcandy)

router.put('/buy-1/:id',shopcont.buy1)

router.put('/buy-2/:id',shopcont.buy2)

router.put('/buy-3/:id',shopcont.buy3)

module.exports = router