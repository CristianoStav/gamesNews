angular.module('newsHttp', ['ngResource'])

    .factory('resourceCallerFactory', function ($resource) {
        function generateResourceCaller(url, method, params, methodOpts) {
            var resource = $resource(url, params, methodOpts);
            return function () {
                var argsArray = Array.prototype.slice.call(arguments);
                return resource[method].apply(resource, argsArray).$promise;
            };
        }
        return {
            generateResourceCaller: generateResourceCaller
        }
    })
    .factory('newsService', function (resourceCallerFactory) {
        var resource = resourceCallerFactory.generateResourceCaller;
        return {
            getNews: resource('/api/news', query)
        }
    })