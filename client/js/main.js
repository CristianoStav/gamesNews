angular.module('gamesNews', ['ngRoute', 'ngResource',])
    .config(function ($routeProvider, $locationProvider, $httpProvider) {

        // as vezes dá erro por causa de rotas 'iguais' no servidor
        // $locationProvider.html5Mode(true);


        $routeProvider.when("/", {
            templateUrl: 'components/news/news.html',
            controller: 'NewsController'
        });

        $routeProvider.otherwise({ redirectTo: '/' });
        
    });