
const ReservasControl={}

//const ReservasModels = require('../models/Reservas.models')
const Reservas= require('../models/Reservas.models')

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
    ReservasControl.crearadmin=async(req,res)=> {
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
    ReservasControl.EditarReserva=async(req,res)=>{

        const correo=req.params.correo
        await Reservas.findOneAndUpdate({_correo:correo},req.body)

        res.json({
            mensaje:'Reserva Actualizada Correctamente'
        })
    }
    ReservasControl.Eliminar=async(req,res)=>{
        const correo=req.params.correo
        await Reservas.findOneAndRemove({_correo:correo})
        res.json({
            mensaje:'Reserva Eliminada Correctamente'
        })
    }
    ReservasControl.Listar=async(req,res)=>{
        const respuesta = await Reservas.find()
        res.json(respuesta)
    }
    ReservasControl.BuscarReserva=async(req,res)=>{
        const correo = req.params.correo
        const respuesta = await Reservas.findOne({correo:{ $regex:".*"+correo+ ".*"}})
        res.json(respuesta)
    }
   // ReservasModels
module.exports=ReservasControl
