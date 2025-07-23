const express = require('express')
const db = require('./db')
require('dotenv').config()
const passport = require('./auth.js')

const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000

const logRequest = (req, res, next) => {
  console.log(`[${new Date().toLocaleString()}]`)
  next()
}

const app = express()
app.use(bodyParser.json())
app.use(logRequest)


app.use(passport.initialize())
const localAuthMiddleware = passport.authenticate('local', { session: false })

app.get('/', (req, res) => {
  res.send('Welcome to the my hotels......')
})

const personRoutes = require('./routes/personRoutes')
app.use('/person',localAuthMiddleware, personRoutes)

const menuItemRoutes = require('./routes/menuItemRoutes')
app.use('/menu', menuItemRoutes)


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
