var mongoose = require('mongoose')
var ObjectId = mongoose.Schema.ObjectId

var trackSchema = new mongoose.Schema({
    artistName: { type: String, required: true },
    collectionName: { type: String, required: true },
    trackName: { type: String, required: true },
    previewUrl: { type: String, required: true },
    artworkUrl100: { type: String, required: true },
    trackPrice: { type: String, required: false },
})

var Track = mongoose.model('Tracks', trackSchema)

module.exports = Track