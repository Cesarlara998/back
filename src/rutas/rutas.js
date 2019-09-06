var router = require('express').Router()
var user = require('./user/userRoute')
var login = require('./login/loginRoute')

//middlewares
// ejemplo : route.use('/dir',{middle1,middle2},variable)

//admin
router.use('/panel',login)
router.use('/panel/usuario',user)

// public routes
 router.get('/', function (req, res) {
   res.status(200).json({ message: 'Estás conectado a nuestra API' })
 })

 module.exports = router