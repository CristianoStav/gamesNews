angular.module('gamesNews', ['ngRoute', 'ngResource', 'newsHttp'])
    .config(function ($routeProvider, $locationProvider) {


        $routeProvider.when("/", {
            templateUrl: 'components/news/news.html',
            controller: 'NewsController'
        });

        $routeProvider.when("/new", {
            templateUrl: 'components/new/new.html',
        });

        $routeProvider.otherwise({ redirectTo: '/' });
        
    });