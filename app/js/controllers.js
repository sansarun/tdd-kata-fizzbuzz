var module = angular.module('fizzbuzz.controllers', []);

module.controller('main', ['$scope', 'fizzbuzzService', function($scope, fizzbuzzService){
    $scope.nextNumber = 1;
    $scope.output = [];

    $scope.next = function() {
    	var answer = fizzbuzzService.answer($scope.nextNumber);
    	$scope.output.push(answer);
    };
}]); 