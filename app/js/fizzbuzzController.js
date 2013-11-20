var app = angular.module('fizzbuzzApp', []);

app.controller('fizzbuzzController', ['$scope', function($scope){
    $scope.nextNumber = 1;
    $scope.output = [];

    $scope.next = function() {
    	$scope.output.push("?");
    };

}]);