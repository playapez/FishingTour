const{Router}=require('express');

const router=Router();
const controlUsuario= require('../controllers/Usuario.controller');
const Auth = require('../helper/Auth');

router.post('/crear', controlUsuario.crearUsuario)
router.post('/login',controlUsuario.login)
router.get('/listarU',Auth.verificarTokenAdministrador, controlUsuario.listarusuario)
router.get('/buscar/:correo',Auth.verificarTokenAdministrador,controlUsuario.BuscarUsuario)
module.exports=router