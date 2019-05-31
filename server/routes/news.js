module.exports = function (app) {

    var newsController = app.controllers.newsController;
    
    app.route('/api/news/:info')
        .get(newsController.getNews);

};