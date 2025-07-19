const express = require('express')
const db = require('./db')
require('dotenv').config()

const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000

const app = express()
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Welcome to the my hotels......')
})

const personRoutes = require('./routes/personRoutes')
app.use('/person',personRoutes)

const menuItemRoutes = require('./routes/menuItemRoutes')
app.use('/menu',menuItemRoutes)


app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`)
})
