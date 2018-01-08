// const MongoClient = require('mongodb').MongoClient;
const{MongoClient, ObjectID} = require('mongodb');

var obj = ObjectID();

console.log(obj);
//
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
   if(err){
    return  console.log('Unable To Connect To MongoDB server')
   }

    console.log('Connect to MongoDB server');

//    db.collection('Users').insertOne({
//      name: 'chani',
//      age: 20,
//      location: 'Tel-aviv'
//    },(err,result) => {
//     if(err){
//       return console.log('Unable to insert Data');
//     }
//
//      console.log(JSON.stringify(result.ops,undefined,2));
//    });
//
//   //  db.collection('Tos').insertOne({
//   //   text: 'Somthing To Do',
//   //   completed: false
//   //  },(err,result) => {
//   //   if(err){
//   //     return console.log('Unable to inser Data');
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  //
  // });

//    db.close();
// });
