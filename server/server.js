const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/TodoApp')

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
})

// var otherTodo = new Todo({
//   text: 'Something to do'
// })

// otherTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2))
// }, (e) => {
//   console.log('Unable to save todo')
// })


var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
})

var user = new User({
  email: 'apple@apple.com'
})

user.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2))
}, (e) => {
  console.log('Unable to save email')
})
