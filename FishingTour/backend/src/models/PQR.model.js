const mongoose = require('mongoose')
const {Schema}= mongoose

const PQRSchema = new Schema({

    nombre:String,
    correo:String,
    mensaje:String,
    opcion:String
})

module.exports= mongoose.model('pqr',PQRSchema)
