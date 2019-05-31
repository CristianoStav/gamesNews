(function () {
    'use strict';

    angular
        .module('gamesNews')
        .controller('NewsController', NewsController);

    NewsController.$inject = ['$scope', '$location', 'newsService'];

    function NewsController($scope, $location, newsService) {

        newsService.getNews("games")
        .then(function(result){
            $scope.news = result.articles;
        });

    }
})();