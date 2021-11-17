const express = require ('express');
const morgan = require('morgan');
const cors = require('cors');

//const bodyParser= require ('body-parser')

const app = express()


require('./database')


app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

//Rutas
app.use('/Administrador',require('./src/routers/Administrador.route'))
app.use('/Reserva',require('./src/routers/Reserva.route'))
app.use('/Usuario', require('./src/routers/Usuario.route'))
//configuracion del puerto

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function(){
    console.log('Escuchando en el puerto '+ app.get('puerto'));
});
