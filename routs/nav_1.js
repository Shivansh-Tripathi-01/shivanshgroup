const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/privacy-policy', (req, res) => {
    res.render('public/privacy-policy')
});

router.get('/about', (req,res)=> {
    res.render('public/about');
})

module.exports = router;