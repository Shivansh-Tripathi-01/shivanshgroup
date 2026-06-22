const express = require('express');
const qrcode = require('qrcode');

const router = express.Router()

router.get('/qr-generator', (req,res) => {
    res.render('public/qr_gen')
})

router.post('/qr-generator', async (req,res) => {
    const { text } = req.body;

    const qr = await qrcode.toDataURL(text);

    res.json({
        success: true,
        qr: qr
    });
});

module.exports = router
