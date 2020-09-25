const express = require('express')
const Template = require('../model/template')
const router = express.Router()

// REST template APIs

router.get('/template', async (req, res) => {
    try {
        const temps = await Template.find({})
        res.$success(temps)
    } catch(error) {
        res.$error(error)
    }
})

router.get('/template/:id', async (req, res) => {
    try {
        const temp = await Template.findById({_id: req.params.id})
        if (temp) {
            res.$success(temp)
        } else {
            res.$error('暂无数据', 400)
        }
    } catch(error) {
        res.$error(error)
    }
})

router.post('/template', async (req, res) => {
    try {
        const temp = await Template.create(req.body)
        res.$success(temp)
    } catch (error) {
        res.$error(error)
    }
})

router.put('/template/:id', async (req, res) => {
    try {
        const temp = await Template.findByIdAndUpdate({_id: req.params.id}, req.body, {
            new: true
        })
        res.$success(temp)
    } catch (error) {
        res.$error(error)
    }
})

router.delete('/template/:id', async (req, res) => {
    try {
        const temp = await Template.findByIdAndDelete({_id: req.params.id})
        res.$success(temp)
    } catch (error) {
        res.$error(error)
    }
})

module.exports = router