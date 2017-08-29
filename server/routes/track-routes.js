var express = require('express')
var router = express.Router()
var tracks = require('../models/track')


router.get('/', function (req, res, next) {
    tracks.find({})
        .then((tracks) => {
            res.send(tracks)
        }) .catch(next)
})

router.post('/', function (req, res, next) {
    tracks.create(req.body)
        .then((track) => {
            res.send(track)
        }) .catch(next)
})

router.put('/:trackId'), (req, res, next) => {
    
}

router.delete('/:trackId', (req, res, next) => {
    
    var trackId = req.params.trackId
    console.log(trackId)
    tracks.findByIdAndRemove(trackId)
        .then(trackId => {
            res.send({ message: 'Successfully deleted.' })
        }) .catch(next)
})

router.use(defaultErrorHandler)

function defaultErrorHandler(err, req, res, next) {
    if (req.xhr) {
        res.json({ success: false, error: err })
    } else {
        res.json({ success: false, error: err.message })
    }
}

module.exports = router
