const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
    if(err){
        return console.log('Unable to connect to Mongodb server');
    }
    console.log("Connected to MongoDB server");
    db.collection('Users').findOneAndUpdate({
        _id:new ObjectID("5a190c5ab9dd6d2c445b5a6d")
    },{
        $set:{name:"Vasa"}
    },{
        $inc:{ age : 15}
    },{
        returnOriginal : false
    }).then((result)=>{
        console.log(result);
    });
    db.close();
});