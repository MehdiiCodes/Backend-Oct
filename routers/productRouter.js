const express = require('express');

const router = express.Router();

router.get('/add', (req, res) => {
    res.send('reaponse from product add')
})

// getall
router.get('/getall', (req, res) => {
    res.send('reaponse from product getall')
})

// getbyID
router.get('/getbyid', (req, res) => {
    res.send('reaponse from product getbyid')
})

// delete
router.get('/delete', (req, res) => {
    res.send('reaponse from product delete')
})

module.exports = router;