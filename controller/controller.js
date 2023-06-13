const candy = require('../model/candy')

exports.page = (req,res) => {
    return res.sendFile(path.join(__dirname,'../views','index.html'))
}

exports.addcandy = async(req,res) => {
    const {candyname,description,price,quantity} = req.body
    await candy.create({candyname,description,price,quantity})
    return res.status(200).json({success:true , message:"successfully creted"})
}

exports.getcandies = async(req,res) => {
    const candies = await candy.findAll()
    return res.status(200).json({success:true , candies})
}