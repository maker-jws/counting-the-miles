const options = {
  'create-error': 'Something went wrong with your create',
  'test-error': 'testing that error handler is working',
}

const errorParser = (req, res, next) => {
  let errorState = req.query.errorMsg
  if (errorState) {
    res.locals.error = options[errorState]
  } else {
    res.locals.error = null
  }
  next()
}

module.exports = errorParser
