const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

// Todo.remove({}).then((result) => {
//   console.log(result)
// })

Todo.findOneAndRemove({_id: '5b225b12806057e7dfb50d5f'}).then((todo) => {
  console.log(todo)  
})

Todo.findByIdAndRemove('5b225b12806057e7dfb50d5f').then((todo) => {
  console.log(todo)
})



