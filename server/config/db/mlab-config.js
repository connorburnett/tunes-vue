var mongoose = require('mongoose')
var connection = mongoose.connection

mongoose.connect('mongodb://con:con@ds159013.mlab.com:59013/tunes', {
  server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }
})

connection.on('error', (err) =>{
  console.log('Connection to Mlab has failed.', err)
});

connection.once('open', () => {
  console.log('Connected to Mlab.')
});