const express = require('express')
const db = require('./db')

const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Welcome to the my hotels......')
})

const personRoutes = require('./routes/personRoutes')
app.use('/person',personRoutes)

const menuItemRoutes = require('./routes/menuItemRoutes')
app.use('/menu',menuItemRoutes)

app.listen(3000)
