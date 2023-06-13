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

exports.buy1 = async(req,res) => {
    const candies = await candy.findOne({where:{id:req.params.id}})
    await candy.update({price:candies.price - 1},{where:{id:req.params.id}})
    return res.status(200).json({success:true , candies})
}

exports.buy2 = async(req,res) => {
    const candies = await candy.findOne({where:{id:req.params.id}})
    await candy.update({price:candies.price - 2},{where:{id:req.params.id}})
    return res.status(200).json({success:true , candies})
}

exports.buy3 = async(req,res) => {
    const candies = await candy.findOne({where:{id:req.params.id}})
    await candy.update({price:candies.price - 3},{where:{id:req.params.id}})
    return res.status(200).json({success:true , candies})
}