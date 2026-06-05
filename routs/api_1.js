const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/currencyconverter', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/currency_conv.html'));
});

module.exports = router;
