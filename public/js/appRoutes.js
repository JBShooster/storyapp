// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // story page
        .when('/story', {
            templateUrl: 'views/story.html',
            controller: 'StoryController'
        })

        // about page
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutController'
        });


    $locationProvider.html5Mode(true);

}]);