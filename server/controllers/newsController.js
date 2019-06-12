var NewsApi = require('newsapi'),
    newsapi = new NewsApi('9db736bc09ba487a951b358f15ce815c'),
    Promise = require('bluebird');

function getArticles(param) {
    var data = new Date();
    data.setDate(data.getDate() - 1);
    return newsapi.v2.topHeadlines({
        q: param,
        language: 'pt',
        from: data,
        to: new Date(),
    })
        .then(function (resp) {
            return resp;
        });
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

module.exports = {

    getNews: function (req, res) {
        Promise.all([
            getArticles('E3'),
            getArticles('Games'),
            getArticles("geek")
        ])
            .spread(function (e3, games, geek) {
                var articles = e3.articles.concat(geek.articles).concat(games.articles);
                shuffle(articles);
                res.send(articles);
            });
    }
};