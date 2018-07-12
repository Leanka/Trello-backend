let mongoose = require("mongoose");

exports.connectDb = function() {
    //mongoose.connect("mongodb://localhost/trelolo_app");
    mongoose.connect("mongodb://admin:admin123@ds235181.mlab.com:35181/trelolo");
    let db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log('Connected to MongoDB!');
    }); 
}
