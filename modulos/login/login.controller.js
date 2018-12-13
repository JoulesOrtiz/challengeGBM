(function () {
    "use strict";

    angular.module('login.module')

        .controller('loginController',
            ['$scope', '$rootScope', '$location', 'loginService',login]);

            function login($scope, $rootScope, $location, loginService) {
                
                loginService.ClearCredentials();

                $scope.login = function () {
                    $scope.dataLoading = true;
                    loginService.Login($scope.username, $scope.password, function (response) {
                        if (response.success) {
                            loginService.SetCredentials($scope.username, $scope.password);
                            $location.path('/home');
                        } else {
                            $scope.error = response.message;
                            $scope.dataLoading = false;
                        }
                    });
                };
            };

})();