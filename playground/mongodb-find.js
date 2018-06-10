// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  var db = client.db('TodoApp')

  console.log('connect to MongoDB server')

  // db.collection('Todos').find({
  //   _id: new ObjectID('5b1cb455cab5eb708d60f63e')
  // }).toArray().then((docs) => {
  //   console.log('Todos')
  //   console.log(JSON.stringify(docs, undefined, 2))
  // }, (err) => {
  //   console.log(err)
  // })

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`)
  // }, (err) => {
  //   console.log(err)
  // })

  db.collection('Users').find({name: 'Shubham Tatvamasi'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2))
    // console.log(`Todos count: ${count}`)
  }, (err) => {
    console.log(err)
  })




  client.close()
})



