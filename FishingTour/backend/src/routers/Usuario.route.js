const{Router}=require('express');

const router=Router();
const controlUsuario= require('../controllers/Usuario.controller')

router.post('/crearusuario', controlUsuario.crearUsuario)
router.post('/loginusuario',controlUsuario.login)

module.exports=router