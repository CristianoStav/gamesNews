angular.module('newsHttp', ['ngResource'])

    .factory('resourceCallerFactory', function ($resource) {
        function generateResourceCaller(url, methodCall, paramOpts, methodOpts) {
            var resource = $resource(url, paramOpts, methodOpts);
            return function () {
                var argumentsArray = Array.prototype.slice.call(arguments);
                return resource[methodCall].apply(resource, argumentsArray).$promise;
            };
        }
        return {
            generateResourceCaller: generateResourceCaller
        };
    })
    .factory('newsService', function (resourceCallerFactory) {
        var resource = resourceCallerFactory.generateResourceCaller;

        return {
            getNews: function (config) {
                resource('/api/news', 'get');
            }
        };
    });