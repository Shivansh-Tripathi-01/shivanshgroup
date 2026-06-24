const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

const Contact = require('../modles/contact'); // Change to ../models/contact if needed

// Privacy Policy Page
router.get('/privacy-policy', (req, res) => {
    res.render('public/privacy-policy');
});

// About Page
router.get('/about', (req, res) => {
    res.render('public/about');
});

// Contact Page
router.get('/contact', (req, res) => {
    res.render('public/contact');
});

// Save Contact Form Data and Send Email
router.post('/contact', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        const contact = new Contact({
            name,
            email,
            subject,
            message
        });

        await contact.save();

//        if (email) {
//            await transporter.sendMail({
//                from: 'yourgmail@gmail.com',
//                to: email,
//                subject: 'Thank You for Contacting Us',
//                text: `Hello ${name},
//
//Thank you for contacting us.
//
//We have received your message:
//
//"${message}"
//
//We will get back to you as soon as possible.
//
//Regards,
//Your Website Team`
//            });
//        }
//
        res.redirect('/nav/contact?success=1');

    } catch (error) {
        console.error('Contact Form Error:', error);
        res.status(500).send('Server Error');
    }
});

module.exports = router;

























//const express = require('express');
//const router = express.Router();
//const path = require('path');
//const nodemailer = require('nodemailer');
//
//const Contact = require('../modles/contact');
//
//router.get('/privacy-policy', (req, res) => {
//    res.render('public/privacy-policy')
//});
//
//router.get('/about', (req,res)=> {
//    res.render('public/about');
//});
//
//router.get('/contact', (req,res)=>{
//    res.render('public/contact');
//});
//
//// Save Contact Form Data and Send Email
//router.post("/contact", async (req, res) => {
//    try {
//        const { name, email, subject, message } = req.body;
//
//        const contact = new Contact({
//            name,
//            email,
//            subject,
//            message
//        });
//
//        await contact.save();
//
//        if (email) {
//            await transporter.sendMail({
//                from: process.env.EMAIL,
//                to: email,
//                subject: 'Thank You for Contacting Us',
//                text: `Hello ${name},
//
//                Thank you for contacting us.
//
//                We have received your message:
//
//                "${message}"    
//
//                We will get back to you as soon as possible.
//
//                Regards,
//                Your Website Team`
//            });
//        }
//
//        res.redirect('/nav/contact?success=1');
//    } catch (error) {
//        console.error(error);
//        res.status(500).send("Server Error");
//    }
//});
//
//module.exports = router;
//