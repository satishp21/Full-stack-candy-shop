const express = require('express')

const path = require('path')

const shoproutes = require('./routes/routes')

const app = express()

app.use(express.static(path.join(__dirname,'views'))); // if we dont write this index js file wont be served with index.html only index.html will served

// app.get('/',(req,res) => {
//     return res.sendFile(path.join(__dirname,'views','index.html'))
// })

app.use('/',shoproutes)

app.listen(3000)