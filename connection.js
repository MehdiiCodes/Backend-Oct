const mongoose = require('mongoose');

const url = "mongodb+srv://mehdiicodes:Akbar27@akbarmehdi.q8tbfar.mongodb.net/mydb?retryWrites=true&w=majority&appName=AkbarMehdi";

// asynchroneous function - returns Promise
mongoose.connect(url)
    .then((result) => { //thenc, shortcut key.
        console.log('database conntected');
    })
    .catch((err) => {
    console.log(err);
    });

module.exports = mongoose;
