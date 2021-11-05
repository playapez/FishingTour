
const express  = require ('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')

const bodyParser = require('body-parser')


app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json)
app.use(cors())



app.set('puerto' , process.env.PORT || 3000) ;
app.listen(app.get('puerto'), function () {
    console.log('Example app listening on port' + app.get('puerto'));
});