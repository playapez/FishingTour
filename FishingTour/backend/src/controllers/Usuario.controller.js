const controlUsuario={};

const Usuario=require('../models/Usuario.models');

const bcrypt=require('bcryptjs');

const jwt=require('jsonwebtoken');

controlUsuario.crearUsuario= async(req,res)=>{ //se crea nuevo usuario pero se mira que no exista en la base de datos
    const {nombres,apellidos,correo,contrasena,direccion,ciudad,departamento}=req.body
    const NuevoUsuario= new Usuario({
        nombres,
        apellidos,
        correo,
        contrasena,
        direccion,
        ciudad,
        departamento
    })
    const correousuario = await Usuario.findOne({correo:correo})
    if (correousuario){
        res.json({
   
           mensaje:'El correo ya existe'
   
        })
    }
    else{
           NuevoUsuario.contrasena= await bcrypt.hash(contrasena,10)
           const token= jwt.sign({_id:NuevoUsuario._id},'Secreta')
   
           await NuevoUsuario.save()
   
           res.json({
               mensaje:'Bienvenido',
               id:NuevoUsuario.id,
               nombres:NuevoUsuario.nombres,
               apellidos: NuevoUsuario.apellidos,
               ciudad:NuevoUsuario.ciudad,
               departamento:NuevoUsuario.departamento,
               token
           })
   
    }
     
   }
   
   
   controlUsuario.login=async(req,res)=> {
       const{correo,contrasena}=req.body
   
       const usuario1 = await Usuario.findOne({correo:correo})
   
       if(!usuario1){
           return res.json({
               mensaje: 'Correo Incorrecto'
           })
       }
       const match = await bcrypt.compare(contrasena, usuario1.contrasena)
       if(match){
           const token=jwt.sign({_id: usuario1._id}, 'Secreta')
   
           res.json({
   
               mensaje:'Bienvenido',
               id:usuario1.id,
               Nombres: usuario1.nombres,
               apellidos:usuario1.apellidos,
               token
           })
       }
       else {
   
           res.json({
               mensaje:'Contraseña incorrecta'
           })
   
       }
   }

   module.exports=controlUsuario