const { MongoClient, ObjectID } = require('mongodb');
require('dotenv').config();
const db = require('db');

// const connectionURL = 'mongodb://127.0.0.1:27017'
// const databaseName = 'task-manager';

MongoClient.connect({connectionURL: process.env.DB_URL}, {useNewUrlParser: true,useUnifiedTopology: true }, (error, client) => {
    if (error) {
      return console.log('Unable to connect to database');
    }
    const db = client.db({databaseName: process.env.DB_NAME});

    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectID("5fcd9d9d1b3d3827dcccad12")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // })
    // updatePromise.then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // });

    // db.collection('tasks').updateMany({
    //     completed: true
    // }, {
    //     $set: {
    //         completed :false
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount);
    // }).catch((error) => {
    //     console.log(error);
    // });

    // db.collection('users').deleteMany({
    //     age: 21
    // }).then((result) => {
    //     console.log(result)
    // }).catch();

    db.collection('tasks').deleteOne({
        description: 'room cleaning'
    }).then((result) => {
        console.log(result.deletedCount)
    }).catch((error) => {
        console.log(error);
    })
});

