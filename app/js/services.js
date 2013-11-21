var module = angular.module('fizzbuzz.services', []);

module.service('fizzbuzzService', function() {
	return {
		answer: function(number) {

			if(number <= 0) {
				throw new Error("input out of range");
			}

			if(number % 3 == 0 && number % 5 != 0) {
				return 'fizz';
			}
			else if(number % 5 == 0 && number % 3 != 0) {
				return 'buzz';
			}
			else if(number % 3 == 0 && number % 5 == 0) {
				return 'fizzbuzz';
			}
			else if(number % 3 != 0 && number % 5 != 0) {
				return number;
			}
		}
  	}
});