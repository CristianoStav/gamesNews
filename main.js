var http = require('http'),
    port = 4500,
    app = require('./server/config/express');

// var url = 'https://newsapi.org/v2/everything?' +
//     'q=Games&' +
//     'from=2019-05-30&' +
//     'sortBy=popularity&' +
//     'apiKey=9db736bc09ba487a951b358f15ce815c';

http.createServer(app).listen(port, function () {
    console.log("servidor rodando na porta: ", port);
});

//9db736bc09ba487a951b358f15ce815c