var express = require('express')
var router = express.Router()
var tracksT = require('../models/tracks')

router.get('/tracks/:userId', (req, res, next) => {
    tracksT.find({ userId: req.params.userId })
        .then(tracksT => {
            res.send(tracksT)
        })
        .catch(next)
})

router.get('/:id', (req, res, next) => {
    tracksT.findById(req.params.id)
        .then(tracks => {
            res.send(tracks)
        }).catch(next)
})

router.put('/:id', (req, res, next) => {
    tracksT.findByIdAndUpdate(req.params.id, req.body)
        .then(tracks => {
            res.send({message: 'Song Added.'})
        }).catch(next)
})

router.post('/', (req, res, next) => {
    tracksT.create(req.body)
        .then(tracks => {
            res.send(tracks)
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