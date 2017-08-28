var express = require('express')
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
var cors = require('cors');
var dbConnect = require('./config/db/mlab-config')
var port = process.env.PORT || 3000
var server = express()

var routing = require('./routes/tracks-routes')
var track = require('./routes/track-routes')
var auth = require('./authentication/auth-routes')
var sessions = require('./authentication/sessions')

server.use(cors());
server.options('*', cors())

server.use(express.static(__dirname + '/public' ))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended:true}))
server.use(expressSanitizer())
server.use(sessions)

server.listen(port, ()=>{
  console.log('Listening on port: ', port)
})

server.use('/api/tracks', routing)