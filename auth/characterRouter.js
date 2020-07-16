// const router = require('express').Router()

// this is the same as above
const express = require('express')
const router = express.Router()

const Characters = require('./characterModel.js')

router.get('/', (req, res) => {
  
})

router.get('/test', (req, res) => {
  res.send('yes it is working')
})

module.exports = router