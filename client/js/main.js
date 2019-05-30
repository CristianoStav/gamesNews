angular.module('gamesNews', ['ngRoute', 'ngResource', 'newsHttp'])
    .config(function ($routeProvider, $locationProvider) {


        $routeProvider.when("/", {
            templateUrl: 'components/news/news.html',
            controller: 'NewsController'
        });

        $routeProvider.otherwise({ redirectTo: '/' });
        
    });