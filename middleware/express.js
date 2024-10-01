const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')

const router = express.Router()

router.use(express.static('public'))
router.use(express.urlencoded({ extended: true }))
router.use(express.json())
router.use(methodOverride('_method'))
router.use(morgan('dev'))

// sessions

module.exports = router
