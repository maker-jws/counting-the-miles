/*------------------------------ Starter Code ------------------------------*/

const dotenv = require('dotenv')
dotenv.config()

const mongoose = require('mongoose')
const { Ride, Route } = require('../models')

const connect = async () => {
  await mongoose.connect(process.env.MONGODB_URI)
  console.log('Connected to MongoDB')
  await runQueries()

  await mongoose.disconnect()
  console.log('Disconnected from MongoDB')
  process.exit()
}

connect()

/*----------------------------- Ride Functions -----------------------------*/

const createRide = async () => {
  /*- rideDist: Number \*\*\*
- unit: String (enum: ['km', 'mi']) \*\*\*
- route: routeSchema
- heroImage: String (default: "TBD")
- category: String (enum: ['road', 'mountain', 'gravel', 'touring'])
- isPublic: Boolean (default: false)*/
  const rideData = {
    rideDist: 15.3,
    isPublic: true,
  }
  const newRide = await Ride.create(rideData)
  console.log('New todo:', newRide)
}

const findRides = async (query = {}) => {
  const allRides = await Ride.find(query)
  console.log('All rides:', allRides)
}

const findOneRide = async (query) => {
  const foundRide = await Ride.findOne(query)
  console.log('found ride:', foundRide)
}

/*----------------------------- Route Functions -----------------------------*/

const createRoute = async () => {
  /**
   * \_id: ObjectId
   * name: String (required)
   * description: String (required)
   */
  const routeData = {
    name: 'Lifetime RadFest 2024 - 40 Miler',
    description: 'Short Course',
    routeDist: 47.2,
  }
  const newRoute = await Route.create(routeData)
  console.log('New route:', newRoute)
}

const findRoutes = async (query = {}) => {
  const allroutes = await Route.find(query)
  console.log('All routes:', allroutes)
}

const findOneRoute = async (query) => {
  const foundroute = await Route.findOne(query)
  console.log('found route:', foundroute)
}

/*------------------------------- Run Queries -------------------------------*/

const runQueries = async () => {
  console.log('Queries running.')
  // await createRide()
  // await findRides({ isPublic: false })
  // await findOneRide({ rideDist: { $lte: 10 } })
  await createRoute()
}
