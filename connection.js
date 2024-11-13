const mongoose = require('mongoose');

const url = "";

// asynchroneous function - returns Promise
mongoose.connect(url)
    .then((result) => {
        console.log('database conntected');
    })
    .catch((err) => {
    console.log(err);
    });

