angular.module('newsHttp', ['ngResource'])

    .factory('newsService', function ($resource) {
        var recursoGetNews = $resource('/api/news/:info', { info: '@info' })

        return {
            getNews: (info) => recursoGetNews.query({ info: info }).$promise
        };
    });