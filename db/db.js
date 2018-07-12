let mongoose = require("mongoose");

exports.connectDb = function() {
    var dbURL = process.env.DATABASEURL || "mongodb://localhost/trelolo_app";
    mongoose.connect(dbURL);
    let db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log('Connected to MongoDB!');
    }); 
}
