
const{Router}=require('express');

const router=Router();

const controlAdministrador=require('../controllers/Administrador.controller')

router.post('/crear', controlAdministrador.crearAdmin)
router.post('/login',controlAdministrador.login)

module.exports=router

