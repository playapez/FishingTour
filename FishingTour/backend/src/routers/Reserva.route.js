
const {Router}=require ('express');
const ReservasControl = require('../controllers/Reservas.controller');

const router=Router()

router.post('/crear',ReservasControl.crear)

module.exports=router