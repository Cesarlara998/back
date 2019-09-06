const express = require('express')
const app = express()           
const cors = require('cors')    
const bodyParser = require('body-parser')
const morgan = require('morgan')
const jsw = require('jsonwebtoken')
//middlewares
require('./database')
app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
let port = process.env.port || 3000
var router = require('./rutas/rutas')  
app.use('/api', router)

app.listen(port)
console.log('API escuchando en el puerto ' + port)
module.exports = app