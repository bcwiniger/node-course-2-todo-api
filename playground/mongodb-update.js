//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos')
    //     .findOneAndUpdate({
    //         _id: new ObjectID('5bb653ea3f97772c90f8abcc')
    //     }, {
    //         $set: {
    //             completed: true
    //         }
    //     }, {
    //         returnOriginal: false
    //     }).then((result) => {
    //         console.log(result);
    //     });

    db.collection('Users')
        .findOneAndUpdate({
            _id: new ObjectID('5bb619b1e3d3a717ec8e3a7c')
        }, {
            $set: {
                name: 'Beau'
            },
            $inc: {
                age: 1
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        });

    //db.close();
});