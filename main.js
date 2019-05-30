var express = require('express'),
    app = express(),
    request = require('request');

var url = 'https://newsapi.org/v2/everything?' +
    'q=Games&' +
    'from=2019-05-30&' +
    'sortBy=popularity&' +
    'apiKey=9db736bc09ba487a951b358f15ce815c';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./client'));


app.listen(4500, function () {
    console.log("Servidor Rodando na porta 4500");
});

//9db736bc09ba487a951b358f15ce815c