//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
    if(err){
        return console.log('Unable to connect to Mongodb server');
    }
    console.log("Connected to MongoDB server");
    db.collection('Users').find({
        name : 'Prashanth Vasa'
    }).count().then((count)=>{
        console.log("Count is "+count);
    },(err)=>{
        console.log("Unable to fetch",err);
    });
    db.close();
});