// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  var db = client.db('TodoApp')

  console.log('connect to MongoDB server')

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b1cb455cab5eb708d60f63f')
  }, {
    $set:{
      name: 'Shubham Tatvamasi'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result)
  })

  client.close()
})



