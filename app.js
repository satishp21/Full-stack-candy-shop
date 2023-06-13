const express = require('express')
const cors = require('cors')

const path = require('path')

const shoproutes = require('./routes/routes')
const sequelize = require('./util/database')

const app = express()
app.use(cors())

app.use(express.json())

app.use(express.static(path.join(__dirname,'views'))); // if we dont write this index js file wont be served with index.html only index.html will served

app.use('/',shoproutes)

sequelize.sync().then(()=>{
    app.listen(3000)
}).catch((err)=>{
    console.log(err)
})