

const mongoose = require('mongoose');
const {Schema}= mongoose;

const UsuarioSchema = new Schema({

    nombres:String,
    apellidos:String,
    correo:String,
    contrasena:String,
    direccion:String,
    ciudad:String,
    departamento:String

})

module.exports= mongoose.model('Usuario',UsuarioSchema)