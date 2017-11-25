const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
    if(err){
        return console.log('Unable to connect to Mongodb server');
    }
    console.log("Connected to MongoDB server");
    db.collection('Users').findOneAndDelete({_id:new ObjectID("5a1982396f0add2ed89bfd73")}).then((result)=>{
        console.log(result);
    });
    // db.collection('Users').deleteMany({name:'Prashanth Vasa'}).then((result)=>{
    //         console.log(result);
    //    
    // });
    db.close();
});