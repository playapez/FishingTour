
const controlAdministrador={};

const admin=require('../models/Administrador.model');

const bcrypt=require('bcryptjs');

const jwt=require('jsonwebtoken');
//const UsuarioControl = require('./Usuario.controller');
//const Usuario= require('../models/Usuario.models');

controlAdministrador.crearAdmin= async(req,res)=>{ //se crea nuevo Admin pero se mira que no exista en la base de datos
    const {nombre,correo,contrasena}=req.body
    const NuevoAdmin= new admin({
        nombre,
        correo,
        contrasena
    })
const correoadmin = await admin.findOne({correo:correo})
 if (correoadmin){
     res.json({

        mensaje:'El correo ya existe'

     })
 }
 else{
        NuevoAdmin.contrasena= await bcrypt.hash(contrasena,10)
        const token= jwt.sign({_id:NuevoAdmin._id},'Secreta')

        await NuevoAdmin.save()

        res.json({
            mensaje:'Bienvenido',
            id:NuevoAdmin.id,
            nombre:NuevoAdmin.nombre,
            token
        })

 }
  
}


controlAdministrador.login=async(req,res)=> {
    const{correo,contrasena}=req.body

    const admin1 = await admin.findOne({correo:correo})

    if(!admin1){
        return res.json({
            mensaje: 'Correo Incorrecto'
        })
    }
    const match = await bcrypt.compare(contrasena, admin1.contrasena)
    if(match){
        const token=jwt.sign({_id: admin1._id}, '123ASD')

        res.json({

            mensaje:'Bienvenido',
            id:admin1.id,
            nombre: admin1.nombre,
            token
        })
    }
    else {

        res.json({
            mensaje:'Contraseña incorrecta'
        })

    }
}

module.exports=controlAdministrador