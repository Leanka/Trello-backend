let mongoose = require("mongoose");
let User = require("./models/user");

mongoose.connect("mongodb://localhost/trelolo_app");

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB!');
});

//CLEAR USERS DATABASE
// User.remove({}, function(err) { 
//     if(err) {
//         console.log("cannot clear db");
//     }
//   console.log('collection removed') 
// });