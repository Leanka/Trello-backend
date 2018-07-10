let mongoose = require("mongoose");

exports.connectDb = function() {
    mongoose.connect("mongodb://localhost/trelolo_app");
    let db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log('Connected to MongoDB!');
    }); 
}
