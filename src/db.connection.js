const mongoose = require('mongoose');

// connect to db
const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/demo-app';

mongoose.connect(dbUrl, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => {
        // console.log(`DB connected successfully at ${dbUrl}`);
    })
    .catch(() => {
        console.log(`DB not connected at ${dbUrl}`);
    });