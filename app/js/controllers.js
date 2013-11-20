var module = angular.module('fizzbuzz.controllers', []);

module.controller('main', ['$scope', function($scope){
    $scope.nextNumber = 1;
    $scope.output = [];

    $scope.next = function() {
    	$scope.output.push("?");
    };
}]); 