
const {Router}=require ('express');
const router=Router()
const controlPQR=require('../controllers/PQR.controller')

router.post('/crear', controlPQR.crearpqr)

module.exports=router