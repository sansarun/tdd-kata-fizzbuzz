var module = angular.module('fizzbuzz.services', []);

module.service('fizzbuzzService', function() {
	return {
		answer: function(number) {
			return "?";
		}
  	}
});