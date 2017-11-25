//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
    if(err){
        return console.log('Unable to connect to Mongodb server');
    }
    console.log("Connected to MongoDB server");
    db.collection('Users').insertOne({
        name : 'Prashanth',
        age : 21,
        location : 'Banglore'
    },(err,result)=>{
        if(err){
            return console.log("Unable to insert users",err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });
    db.close();
});