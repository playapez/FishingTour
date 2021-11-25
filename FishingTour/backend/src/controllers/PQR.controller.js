
const controlPQR= {}

const PQR=require('../models/PQR.model')

controlPQR.crearpqr=async(req,res)=>{
    const {nombre, correo, mensaje, opcion}=req.body
    const NuevoPQR= new PQR({
        nombre,
        correo,
        mensaje,
        opcion
    })
    
    const correopqr=await PQR.findOne({correo:correo})
    if(correopqr){

        res.json({
            mensaje:'Ya se ha creado un PQR con este correo, en breve responderemos'
        })

    }
    else{

        const respuesta= await NuevoPQR.save()
        
        res.json ({
            mensaje:'Su Peticion, Queja o Reclamo ha sido creado satisfactoriamente. Nuestro personal revisará su peticion,queja o reclamo en breve.',
            respuesta
        })

    }
}
module.exports=controlPQR