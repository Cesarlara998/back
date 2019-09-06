var router = require('express').Router()
var loginController = require ('../../Controlador/login/Controlador_login')

router.post('/login', function(req, res) {
  console.log(req.body);
  
  loginController.connect(req, res)
})
module.exports = router