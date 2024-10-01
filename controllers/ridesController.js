const express = require('express')
const { cleanRequestBody } = require('../middleware')
const router = express.Router()

const { Ride } = require('../models')
// NEW

router.get('/new', (req, res) => res.render('rides/new'))
// CREATE

router.post('/', cleanRequestBody, async (req, res) => {
  try {
    await Ride.create(req.body)
    res.redirect('/rides')
  } catch (err) {
    res.redirect('/?errorMsg=create-error')
  }
})

// INDEX
router.get('/', (req, res) => res.send('rides index route'))
// -- ICEBOX: if auth -> send only filtered results else only send public responses

// SHOW -
router.get('/:rideId', (req, res) => res.send('rides show route'))

// DELETE
router.delete('/:rideId', (req, res) => res.send('rides delete route'))

// EDIT -
router.get('/:rideId/edit', (req, res) => res.send('rides edit route'))

// UPDATE
router.put('/:rideId', (req, res) => res.send('rides update route'))

module.exports = router
