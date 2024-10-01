const mongoose = require('mongoose')

/**
 * rideDist: Number (required)
 * unit: String (enum: ['km', 'mi'], required)
 * route: route ObjectId // Populate after testing Route model
 * heroImage: String (default: "TBD")
 * category: String (enum: ['road', 'mountain', 'gravel', 'touring'])
 * isPublic: Boolean (default: true)
 */

const heroImages = [
  'https://images.unsplash.com/photo-1527156793828-70e553ee0025',
  'https://images.unsplash.com/photo-1519295918781-d590afd8e95d',
  'https://plus.unsplash.com/premium_photo-1670002245900-23ae41ad88bf',
  'https://plus.unsplash.com/premium_photo-1664303257578-899e943e227e',
]
const getRandomImage = () =>
  heroImages[Math.floor(Math.random() * heroImages.length)]

const rideSchema = mongoose.Schema(
  {
    rideDist: {
      type: Number,
      required: true,
      min: [0.1, 'Registered "ride" is too short'],
    },
    heroImage: {
      type: String,
      default: getRandomImage,
    },
    unit: {
      type: String,
      required: true,
      enum: ['km', 'mi'],
      default: 'mi',
    },
    category: {
      type: String,
      enum: ['city', 'road', 'mountain', 'gravel', 'touring'],
      default: 'city',
    },
    isPublic: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
)

const Ride = mongoose.model('Ride', rideSchema)

module.exports = Ride
