const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/rock-paper-scissor', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/game_1.html'));
});

module.exports = router;