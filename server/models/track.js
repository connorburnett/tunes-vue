var mongoose = require('mongoose')
var Track = mongoose.model('Track', trackData)
var ObjectId = mongoose.Schema.ObjectId

var trackData = new mongoose.Schema({
    artistName: { type: String, required: true },
    collectionName: { type: String, required: true },
    trackName: { type: String, required: true },
    previewUrl: { type: String, required: true },
    artworkUrl90: { type: String, required: true },
    trackPrice: { type: String, required: false },
})

module.exports = Track