
exports.page = (req,res) => {
    return res.sendFile(path.join(__dirname,'../views','index.html'))
}