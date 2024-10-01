const mongoose = require('mongoose')

/**
 * \_id: ObjectId
 * name: String (required)
 * description: String (required)
 * challengeRating: Number [0-5]
 * routeDist: Number
 * unit: String (enum: ['km', 'mi'], required)
 * isPublic: Boolean (default: true)
 */

const routeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 2,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      minLength: 2,
      trim: true,
    },
    challengeRating: { type: Number, min: 0, max: 5, default: 1 },
    routeDist: { type: Number, default: 0, min: 0 },
    unit: {
      type: String,
      required: true,
      enum: ['km', 'mi'],
      default: 'mi',
    },
    isPublic: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
)

const Route = mongoose.model('Route', routeSchema)

module.exports = Route
