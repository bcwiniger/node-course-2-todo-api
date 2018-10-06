const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// let id = '5bb82216fd2932b41cf6d9d7';

// if(!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id)
//     .then((todo) => {
//         if (!todo) return console.log('Id not found');
//         console.log('Todo find by id', todo);
//     }).catch((e) => console.log(e));

let id = '5bb827d9cb15538707aad854';

User.findById('5bb827d9cb15538707aad854')
    .then((user) => {
        if (!user) {
            return console.log('Unable to find user');
        }

        console.log(JSON.stringify(user, undefined, 2));
    }, (e) => {
        console.log(e);
    }).catch((e) => console.log(e));
