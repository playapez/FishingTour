
const mongoose = require('mongoose');
const {Schema}= mongoose;

const AdministradorSchema = new Schema({

    nombre:String,
    correo:String,
    contrasena:String

})

module.exports= mongoose.model('Administrador',AdministradorSchema)
