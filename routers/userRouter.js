const express = require('express');

const router = express.Router();

router.post('/add', (req, res) => {
    res.send('reaponse from user add')
})

// getall
router.get('/getall', (req, res) => {
    res.send('reaponse from user getall')
})

// getbyID
router.get('/getbyid', (req, res) => {
    res.send('reaponse from user getbyid')
})

// update
router.get('/update', (req, res) => {
    res.send('reaponse from user update')
})

// delete
router.get('/delete', (req, res) => {
    res.send('reaponse from user delete')
})

module.exports = router;