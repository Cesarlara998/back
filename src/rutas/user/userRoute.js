const router = require('express').Router()
var userController = require ('../../Controlador/user/controlador_user')
// const {verificador} = require('../../middlewares/auth')

router.post('/', function(req, res) {
  userController.create(req, res)
 
})
module.exports = router