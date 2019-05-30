(function () {
    'use strict';

    angular
        .module('gamesNews')
        .controller('NewsController', NewsController);

    NewsController.$inject = ['$scope', '$location'];

    function NewsController($scope, $location) { }
})();