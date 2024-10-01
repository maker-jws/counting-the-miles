const express = require('express')
const { expressDefaults } = require('./middleware')

// SERVICES & CONFIGURATION
require('dotenv').config()
require('./utils/db.connection') // establish DB connection in its own file - when db.connnection.js executes

// APPLICATION CONFIGURATION
const app = express()
const { PORT } = process.env
const { ridesCtrl } = require('./controllers')
app.set('view engine', 'ejs')

// MIDDLEWARE
app.use(expressDefaults)

// ROUTING
// Homepage
app.get('/', (req, res) => {
  res.render('index')
})

// Auth Controller
// Rides Controller
app.use('/rides', ridesCtrl)
// Routes Controller

// CONTROLLERS
app.listen(PORT, () => console.log('server is running'))
