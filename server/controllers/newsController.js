var NewsApi = require('newsapi'),
    newsapi = new NewsApi('9db736bc09ba487a951b358f15ce815c');


module.exports = {

    getNews: function (req, res) {
        // var url = `https://newsapi.org/v2/everything?q=video-games&apiKey=9db736bc09ba487a951b358f15ce815c`;
        newsapi.v2.everything({
            q: 'games',
            language: 'pt',
        }).then(response => {
            res.send(response);
        })
            .catch(function (err) {
                console.log(err);
            });
    }
};

//api AIzaSyAshjb1ZIv2EjGaKkione8DiJ6_5p_fH2o