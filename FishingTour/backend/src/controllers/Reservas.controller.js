
const ReservasControl={}

const Reservas= require('../models/Reservas.models')
const controlUsuario = require('./Usuario.controller')


    ReservasControl.crear=async(req,res)=> {
        const{nombres,apellidos,telefono,correo,paquetecontratado,fecha}=req.body
        const NuevaReserva= new Reservas({
            nombres, 
            apellidos,
            telefono,
            correo,
            paquetecontratado,
            fecha
        })
        const respuesta= await NuevaReserva.save()
        res.json({
            mensaje:'Reserva Creada Satisfactoriamente',
            respuesta
        })
    }


module.exports=ReservasControl
