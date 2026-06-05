const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 1;


const main = require('./routs/main_1');
app.use("/", main);

const api = require('./routs/api_1');
app.use('/api', api)

const stat = require('./routs/stat_1');
app.use('/stat', stat);

app.use("/static", express.static("static"));
app.use("/assets", express.static("assets"));

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${port}`);
});
