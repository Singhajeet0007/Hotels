const express = require('express')
const routes = express.Router()

const MenuItem = require('./../models/menuItem')

routes.post('/', async (req, res) => {
    try {
        const data = req.body

        const newMenu = new MenuItem(data)

        const response = await newMenu.save()
        console.log('Menu data saved')

        res.status(200).json(response)
    } catch (error) {
        console.log(err)
        res.status(500).json({ error: 'Internal server error' })
    }
})

routes.get('/', async (req, res) => {
    try {
        const data = await MenuItem.find()
        console.log('Menu data fetched successfully')

        res.status(200).json(data)

    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Internal server error' })
    }
})

routes.get('/:tasteType', async (req, res) => {
    try {
        const tasteType = req.params.tasteType
        if (tasteType == 'Sweet' || tasteType == 'Spicy' || tasteType == 'Sour') {
            const response = await MenuItem.find({ taste: tasteType })
            console.log('Menu item fetched')
            res.status(200).json(response)
        } else {
            res.status(404).json({ error: 'invalid work type' })
        }

    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Internal server error' })

    }
})


module.exports = routes