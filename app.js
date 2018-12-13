(function() {
    "use strict";

    // modulos
    angular.module('login.module', []);
    angular.module('home.module', []);
    
    angular.module('appchallengegbm', [
        'login.module',
        'home.module',
        'ngRoute',
        'LocalStorageModule',
        'AngularChart'
    ])
    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/login', {
                controller: 'loginController',
                templateUrl: 'modulos/login/login.html',
                hideMenus: false
            })
     
            .when('/home', {
                controller: 'homeController',
                templateUrl: 'modulos/home/home.html'
            })
     
            .otherwise({ redirectTo: '/login' });
    }])
     
    .run(['$rootScope', '$location', 'localStorageService', '$http',
        function ($rootScope, $location, localStorageService, $http) {
            
            $rootScope.credenciales = localStorageService.get('credenciales') || {};
            if ($rootScope.credenciales.currentUser) {
                $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.credenciales.currentUser.authdata; // jshint ignore:line
            }
     
            $rootScope.$on('$locationChangeStart', function (event, next, current) {
                
                if ($location.path() !== '/login' && !$rootScope.credenciales.currentUser) {
                    $location.path('/login');
                }
            });
        }]);

})();