var mongoose = require('mongoose')
var ObjectId = mongoose.Schema.ObjectId

var tracksSchema = new mongoose.Schema({
    title: { type: String, required: true},
    songs: { type: Array },
    userId: { type: ObjectId, ref: 'User', required: true}
})

var Tracks = mongoose.model('Tracks', tracksSchema)

module.exports = Tracks