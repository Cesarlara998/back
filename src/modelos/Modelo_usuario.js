var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
  Nick : String,
  Nombre: String, 
  password: String, 
  Create_date : String,
  email : String,
  rol : String
});
userSchema.methods.toJSON = function(){
  let usuario = this;
  let userobject = usuario.toObject();
  delete  userobject.password;
  return userobject;
}

var user = mongoose.model('usuario', userSchema)

module.exports = user