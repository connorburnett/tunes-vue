var express = require('express')
var router = express.Router()
var user = require('../models/users')

router.get('/', (req, res, next) => {
    user.find({})
      .then(user => {
        res.send(user)
      })
      .catch(next)
  })

router.post('/', (req, res, next) => {
    user.create(req.body)
      .then(user => {
        res.send('Success')
      }).catch(next)
  })

  // ERROR HANDLER
router.use('/', (err, req, res, next) => {
  if (err) {
    res.send(418, {
      success: false,
      error: err.message
    })
  } else {
    res.send(400, {
      success: false,
      error: 'Request failed.'
    })
  }
})

module.exports = router