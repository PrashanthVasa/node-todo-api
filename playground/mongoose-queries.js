const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require("./../server/models/todo");
const {User} = require('./../server/models/user');


User.findById("6a1a432cda2c93482fcbbe91").then((user)=>{
    if(!user){
        return console.log('Unable to find user');
    }
    console.log(JSON.stringify(user,undefined,2));

},(e)=>{
    console.log(e);
});