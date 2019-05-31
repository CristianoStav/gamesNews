var resquest = require('request')
// var url = 'https://newsapi.org/v2/everything?q=video-games-news&from=2019-05-30&sortBy=popularity&apiKey=9db736bc09ba487a951b358f15ce815c';
module.exports = {

    getNews: function (req, res) {
        var url = `https://newsapi.org/v2/everything?q=${req.params.info}&from=2019-05-30&sortBy=popularity&apiKey=9db736bc09ba487a951b358f15ce815c`;
        resquest.get(url, function (a, b, body) {
            res.send(body);
        })
    }
};