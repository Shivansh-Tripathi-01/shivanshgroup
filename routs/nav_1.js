const express = require('express');
const router = express.Router();
const path = require('path');
const Contact = require('../modles/contact');

router.get('/privacy-policy', (req, res) => {
    res.render('public/privacy-policy')
});

router.get('/about', (req,res)=> {
    res.render('public/about');
});

router.get('/contact', (req,res)=>{
    res.render('public/contact');
});

// Save Contact Form Data
router.post("/contact", async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        const contact = new Contact({
            name,
            email,
            subject,
            message
        });

        await contact.save();

        res.redirect('/nav/contact?success=1');
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

module.exports = router;
