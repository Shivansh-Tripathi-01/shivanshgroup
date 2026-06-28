const express = require('express');
const app = express();
const path = require('path');
const qrcode = require('qrcode');


const port = process.env.PORT || 47217;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const main = require('./routs/main_1');
app.use("/", main);

const api = require('./routs/api_1');
app.use('/api', api)

const stat = require('./routs/stat_1');
app.use('/stat', stat);

const nav1 = require('./routs/nav_1');
app.use('/nav',nav1);

const qr = require('./routs/qr-gen');
app.use('/qr',qr);

app.use("/static", express.static("static"));
app.use("/assets", express.static("assets")); 

const connectDB = require('./config/db_1');

app.get('/ads.txt', (req,res) => {
  res.type('text/plain');
  res.send('google.com, pub-5814413513393088, DIRECT, f08c47fec0942fa0\n');
});

app.use((req,res) => {
    res.status(404).render('public/404')
});

const startServer = () => {
  app.listen(port, '0.0.0.0', () => {
      console.log(`Server running on http://localhost:${port}`);
  });
};

startServer();

connectDB()
  .catch(() => {
    console.warn("Database unavailable. Contact form saves will fail until MongoDB is running.");
  });
