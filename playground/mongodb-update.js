// const MongoClient = require('mongodb').MongoClient;
const{MongoClient, ObjectID} = require('mongodb');

var obj = ObjectID();


//
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
   if(err){
    return  console.log('Unable To Connect To MongoDB server')
   }
    console.log('Connect to MongoDB server');


  db.collection('Users').findOneAndUpdate({
    name: 'keni'
  },{
    $set:{
      name: 'levi'
    },
    $mul:{
      age: 6
    }
  },{
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })





      //db.close();

//
 });
