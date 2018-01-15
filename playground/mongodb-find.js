// const MongoClient = require('mongodb').MongoClient;
const{MongoClient, ObjectID} = require('mongodb');

var obj = ObjectID();


//
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
   if(err){
    return  console.log('Unable To Connect To MongoDB server')
   }
    console.log('Connect to MongoDB server');

     // db.collection('Users').find({
     //   _id: new ObjectID('5a527fe1c9378503f42e47df')
     // }).toArray().then((docs) => {
     //    console.log('Todos');
     //    console.log(JSON.stringify(docs,undefined,2));
     // }, (err) => {
     //    if(err){
     //      console.log('Unable to get the data');
     //    }
     //
     // })
     // db.collection('Users').find().count().then((count) => {
     //    console.log(`Users count: ${count}`);
     // }, (err) => {
     //    if(err){
     //      console.log('Unable to get the data');
     //    }
     //
     // });

      db.collection('Users').find({location: 'T.el-aviv'}).toArray().then((docs) =>{
      console.log('Users');
        console.log(JSON.stringify(docs,undefined,2));
      },(err) => {
        if(err){
          console.log('Unable to get data');
        }
      })



      //db.close();

//
 });
