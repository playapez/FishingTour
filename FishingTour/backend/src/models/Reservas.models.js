const mongoose = require('mongoose')
const {Schema}= mongoose

const ReservasSchema = new Schema({
    nombres:String,
    apellidos:String,
    telefono:String,
    correo:String,
    paquetecontratado:String,
    fecha:String
})

module.exports=mongoose.model('reserva',ReservasSchema)