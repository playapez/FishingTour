
const Auth={}
const jwt=require('jsonwebtoken');

Auth.verificarTokenUsuario=(req,res,next)=>{

    if(!req.headers.autorizacion){
       return res.json({
           mensaje:'No estas Autorizado'
       })
    }

    const token =req.headers.autorizacion

    if(token==='null'){
        return res.json({
            mensaje:'No estas Autorizado'
        })
    }

    jwt.verify(token,'ASD123',(error,resultado)=>{
        if(error)return res.json({
            mensaje:'No estas Autorizado'
        })
        else{
            next()
        }
    })
    
}
Auth.verificarTokenAdministrador=(req,res,next)=>{

    if(!req.headers.autorizacion){
       return res.json({
           mensaje:'No estas Autorizado, Favor contactarse con un Administrador'
       })
    }

    const token =req.headers.autorizacion

    if(token==='null'){
        return res.json({
            mensaje:'No estas Autorizado, Favor contactarse con un Administrador'
        })
    }

    jwt.verify(token,'123ASD',(error,resultado)=>{
        if(error)return res.json({
            mensaje:'No estas Autorizado, Favor contactarse con un Administrador'
        })
        else{
            next()
        }
    })

    
}

module.exports=Auth