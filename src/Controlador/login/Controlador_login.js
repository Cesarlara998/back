var UserModel = require('../../modelos/Modelo_usuario')
var jwt = require('jsonwebtoken')
var bcrypt= require('bcrypt');

module.exports = {


connect: function (req, res) {

  var body = req.body
  if (body.nick!=undefined && body.password!=undefined){
  UserModel.findOne({ Nombre: body.nick},(err,UserModel)=>{

  if (err){
    return res.status(400).json({
      mensaje:"ERROR",
      err
    });
  }

  //no existe o user malo
  if (!UserModel){
    return res.status(400).json({
      mensaje:"Usuario y/o pass erroneas",
      err
    });
  }
  //pass erronea
  if(!bcrypt.compareSync(body.password,UserModel.password)){
    return res.status(400).json({
      mensaje:"Usuario y/o pass  erroneas pass",
      err
    });
  }

  //todo ok
  //token
    let token = jwt.sign({
      user : UserModel},'Never',{expiresIn:30*60*30})

    res.json({
      ok:true,
      usuario: UserModel,
      token
    })
//miralo en jwt.io
  
});
}else{
  res.json({
    ok:false,
    mensaje:"Data Form Incorrecta"
  })
}
  }
}