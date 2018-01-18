var mongoose = require('mongoose');

var users = mongoose.model('Users',{
  name: {
    type: String
  },
  email:{
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  passowrd:{
    required: false
  }
});

module.exports = { users};
