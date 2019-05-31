var express = require('express'),
    app = express(),
    consign = require("consign"),
    bodyParser = require('body-parser');

app.use(express.static('./client'));
app.use(bodyParser.json());


consign({ cwd: 'server' })
//     .include("models")
    .then("controllers")
    .then("routes")
    .into(app);

module.exports = app;