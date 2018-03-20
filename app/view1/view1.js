'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }]);

angular.module('myApp.view1').controller('View1Ctrl', ['$scope', '$location', '$http', function($scope, $location, $http) {
        $scope.lastname=$location.absUrl();

        $scope.getUsers = function() {
            $http({
                method: 'GET',
                url: 'data/users.json'
            }).then(function success(response){
                    $scope.users = response.data.users;
                }, function error(response) {
                    console.log("fail");
                });
        }
    }]);