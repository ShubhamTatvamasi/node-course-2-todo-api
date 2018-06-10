// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  var db = client.db('TodoApp')
  console.log('connect to MongoDB server')

  // delete many
  db.collection('Todos').deleteMany({text: 'Something to do'}).then((result) => {
    console.log(result)
  })

  // delete one
  db.collection('Todos').deleteOne({name: 'Shubham Tatvamasi'}).then((result) => {
    console.log(result)
  })

  // find one and delete
  db.collection('Users').findOneAndDelete({name: 'Shubham Tatvamasi'}).then((result) => {
    console.log(result)
  })

  db.collection('Users').findOneAndDelete({location: 'India'}).then((result) => {
    console.log(result)
  })




  // client.close()
})



