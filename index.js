// importing express
const express = require('express');
const UserRouter = require('./routers/userRouter');

//creating an express app
const app = express();

const port = 5000;

// middleware
app.use( '/user', UserRouter );

//route orendpoint
app.get('/', (req, res) => {
    res.send('response from express');
})

//add
app.get('/add', (req, res) => {
    res.send('response from add');
})

//getall
app.get('/getall', (req, res) => {
    res.send('response from getall');
})

//delete
app.get('/delete', (req, res) => {
    res.send('response from delete');
})

// staring the server
app.listen( port, () => { console.log('server started');
 } )