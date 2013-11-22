var module = angular.module('fizzbuzz.controllers', ['fizzbuzz.services']);

module.controller('mainController', ['$scope', 'fizzbuzzService', function($scope, fizzbuzzService){
    $scope.nextNumber = 1;
    $scope.output = [];

    $scope.next = function() {
    	var answer = fizzbuzzService.answer($scope.nextNumber);
    	$scope.output.push(answer);
    	$scope.nextNumber++;
    };
}]); 