const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/currencyconverter', (req, res) => {
    res.render('public/currency_conv.ejs');
});

module.exports = router;
