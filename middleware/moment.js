const express = require('express')
const moment = require('moment')
const router = express.Router()

router.use((req, res, next) => {
  res.locals.moment = moment
  next()
})

module.exports = router