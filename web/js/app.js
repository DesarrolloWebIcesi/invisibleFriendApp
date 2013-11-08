/**
 * This is the main app javascript file
 * Created on : 07-nov-2013, 11:54:32
 * @author David Andrés Maznzano Herrera <damanzano>
 */
var app = angular.module('invisibleFriendApp', []);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
            .when('/', {
                controller: 'juegosController',
                templateUrl: 'views/juegos/juegos.html'
            })
            .otherwise({redirectTo: '/'});
}]);