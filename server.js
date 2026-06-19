const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 8220;

app.set("view engine", "ejs");

const main = require('./routs/main_1');
app.use("/", main);

const api = require('./routs/api_1');
app.use('/api', api)

const stat = require('./routs/stat_1');
app.use('/stat', stat);

const nav1 = require('./routs/nav_1');
app.use('/nav',nav1);

app.use("/static", express.static("static"));
app.use("/assets", express.static("assets")); 

app.use((req,res) => {
    res.render('public/404')
})

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${port}`);
});
