module.exports = function (app) {

    var newsController = app.controllers.newsController;
    
    app.route('/api/news')
        .get(newsController.getNews);

};