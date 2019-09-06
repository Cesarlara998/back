let UserModel = require('../../modelos/Modelo_usuario')
var bcrypt = require('bcrypt');
module.exports = {
create: function(req, res) {

    var f = new Date();
    var date = (f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());
    
    var body = req.body;
    let objeto = new UserModel({
      Nombre: body.nick,
      password : bcrypt.hashSync(body.password,12),
      Create_date : date,
      email : body.email
    });
    
    console.log(objeto);
    
    objeto.save(function(err, UserModel){
      if(err) {
        return res.status(500).json( {
          message: 'Error al guardar el usuario',
          error: err
        })
      }
      return res.status(201).json({
        message: 'saved',
        _id: UserModel
      })
    })
  }
}