const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// var id = '5ba347102317753efbdf9ee1';

// if (!ObjectID.isValid(id)) {
//   console.log(`Id not valid`);
// }

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log(`Todos`, todos);
// });

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log(`Todo`, todo);
// });

// Todo.findById(id)
//   .then(todo => {
//     if (!todo) {
//       return console.log(`Id not found`);
//     }
//     console.log(`Todo`, todo);
//   })
//   .catch(() => {
//     console.log(e);
//   });

var id = '5ba253b73288bdaf204ff665';

User.findById(id).then(
  user => {
    if (!user) {
      return console.log(`Unable to find user`);
    }
    console.log(JSON.stringify(user, undefined, 2));
  },
  e => {
    console.log(e);
  }
);
