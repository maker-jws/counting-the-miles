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
router.get('/', async (req, res) => {
  try {
    const allPublicRides = await Ride.find({ isPublic: true })
    res.render('rides/index', { rides: allPublicRides })
  } catch (err) {
    res.redirect('/?errorMsg=create-error')
  }
})
// -- ICEBOX: if auth -> send only filtered results else only send public responses

// SHOW -
router.get('/:rideId', async (req, res) => {
  try {
    const foundRide = await Ride.findById(req.params.rideId)
    res.render('rides/show', { ride: foundRide })
  } catch (err) {
    res.redirect('/?errorMsg=create-error')
  }
})

// DELETE
router.delete('/:rideId', (req, res) => res.send('rides delete route'))

// EDIT -
router.get('/:rideId/edit', async (req, res) => {
  try {
    const rideToEdit = await Ride.findById(req.params.rideId)
    res.render('rides/edit', { ride: rideToEdit })
  } catch (err) {
    res.redirect('/?errorMsg=create-error')
  }
})

// UPDATE
router.put('/:rideId', (req, res) => res.send('rides update route'))

module.exports = router
