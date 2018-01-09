// const MongoClient = require('mongodb').MongoClient;
const{MongoClient, ObjectID} = require('mongodb');

var obj = ObjectID();


//
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
   if(err){
    return  console.log('Unable To Connect To MongoDB server')
   }
    console.log('Connect to MongoDB server');

// delete many items
 // db.collection('Todos').deleteMany({text: 'Eat lanuch'}).then((result) => {
 //   console.log(result);
 // });

// delete one items
// db.collection('Todos').deleteOne({text:'Eat lanuch'}).then((result) => {
//   console.log(result);
// });

// // findOneAndDelete
// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//   console.log(result);
// });

// db.collection('Users').deleteMany({location: 'Tel-aviv'}).then((result) => {
//   console.log(result);
// });

db.collection('Users').findOneAndDelete({_id: 123}).then((result) => {
  console.log(result);
});



      //db.close();

//
 });
