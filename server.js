const express = require('express')
const morgan = require('morgan')
const hbs = require('hbs')
const path = require('path')

require('dotenv').config()

const indexRouter = require('./routes/index.router')



const PORT = process.env.SECRET_PORT || 3000
const app = express()



app.set('view engine', 'hbs')

app.use(morgan('dev'))
app.use(express.static(path.join(process.env.PWD, 'public')))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))



app.use('/', indexRouter)



app.listen(PORT, () => {
  console.log('Server reporting');
});
