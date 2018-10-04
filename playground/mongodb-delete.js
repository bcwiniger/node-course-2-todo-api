//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // delete many
    // db.collection('Todos')
    //     .deleteMany({text: 'Eat lunch'})
    //     .then((result) => {
    //         console.log(result);
    //     });

    // delete one
    // db.collection('Todos')
    //     .deleteOne({text: 'Eat lunch'})
    //     .then((result) => {
    //         console.log(result);
    //     });

    // findOneAndDelete
    // db.collection('Todos')
    //     .findOneAndDelete({completed: false})
    //     .then((result) => {
    //         console.log(result);
    //     });

    // delete many to delete duplicates
    // db.collection('Users')
    //     .deleteMany({name: 'Beau'})
    //     .then((result) => {
    //         console.log(result);
    //     });

    // findOneAndDelete by object id
    db.collection('Users')
        .findOneAndDelete({_id: new ObjectID('5bb61911afc920439c1c09a1')})
        .then((result) => {
            console.log(result);
        });
    //db.close();
});