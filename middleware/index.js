const cleanEmptyFields = (req, res, next) => {
  const obj = req.body
  req.body.isPublic = !!req.body.isPublic

  for (key in obj) {
    if (obj[key] === '') {
      delete obj[key]
    }
  }
  next()
}

module.exports = {
  expressDefaults: require('./express'),
  cleanRequestBody: cleanEmptyFields,
  handleErrors: require('./errors'),
}
