
const {Router}=require ('express');
const ReservasControl = require('../controllers/Reservas.controller');
const Auth= require('../helper/Auth')
const router=Router()

router.post('/crear', Auth.verificarTokenUsuario, ReservasControl.crear)
router.post('/crear', Auth.verificarTokenAdministrador, ReservasControl.crearadmin)
router.put('/actualizar/:correo', Auth.verificarTokenAdministrador, ReservasControl.EditarReserva)
router.delete('/eliminar/:correo',Auth.verificarTokenAdministrador, ReservasControl.Eliminar)
router.get('/listar',Auth.verificarTokenAdministrador,ReservasControl.Listar)
router.get('/buscar/:correo',Auth.verificarTokenAdministrador,ReservasControl.BuscarReserva)
module.exports=router