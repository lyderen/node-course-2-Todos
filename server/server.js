var express = require('express');
var bodyParser = require('body-parser')


var {mongoose} = require('./db/mongoose.js');
var {User} = require('./modles/user.js');
var {Todo} = require('./modles/todo.js')


var app = express();

app.use(bodyParser.json());

app.post('/todos', (req,res) => {
var todo = new Todo({
  text: req.body.text
});

   todo.save().then((doc) => {
     res.send(doc);
       }, (e) => {
        res.status(400).send(e);
     });
});

app.listen(3000, () => {
  console.log('App is start');
})
