const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// Todo.remove({})
//     .then((res) => {
//         console.log(res);
//     });

Todo.findByIdAndRemove('5bb90cf6b44b59050958afe5')
    .then((todo) => {
        console.log(todo);
    });
