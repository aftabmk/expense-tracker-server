const mongoose = require('mongoose');

const connection = mongoose.connect(process.env.ATLAS_URI,{ useNewUrlParser: true, useUnifiedTopology: true })
        .then(db => {
            console.log("Database Connected");
            return db;
        }).catch(err => {
            console.log("Connection Error",err);
        })

module.exports = connection;