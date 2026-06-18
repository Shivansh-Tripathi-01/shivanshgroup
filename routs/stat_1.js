const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/rock-paper-scissor', (req,res) => {
    res.render('public/game_1.ejs');
});

module.exports = router;