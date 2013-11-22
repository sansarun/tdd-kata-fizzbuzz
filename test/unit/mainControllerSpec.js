
beforeEach(module('fizzbuzz.controllers'));

describe('mainController', function(){
	var scope, ctrl;

	//create mock of fizzbuzzService
	var mockFizzbuzzService = {
		answer: function() {
			return "?";
		}
	};

	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		mainController = $controller('mainController', {$scope: scope, fizzbuzzService: mockFizzbuzzService});
	}));

	it('should create nextNumber model', function() {
		expect(scope.nextNumber).toBeDefined();
	});

	it('should initial nextNumber to be 1', function() {
		expect(scope.nextNumber).toEqual(1);
	});

	it('should create output model', function() {
		expect(scope.output).toBeDefined();
	});

	it('should initial output to be empty list', function() {
		expect(scope.output.length).toEqual(0);
	});

	it('should provide next() method', function() {
		expect(scope.next).toBeDefined();
	});

	it('should increase nextNumber by 1 after next() is called', function() {
		var currentNextNumber = scope.nextNumber;
		scope.next();
		expect(scope.nextNumber).toEqual(currentNextNumber + 1);
	});

	it('should produce 1 more output after next() is called', function() {
		var currentOutputLength = scope.output.length;
		scope.next();
		expect(scope.output.length).toEqual(currentOutputLength + 1);
	});

	it('should call answer() method of fizzbuzzService when next() is called', inject(function(fizzbuzzService) {
		spyOn(mockFizzbuzzService, 'answer');
		scope.next();
		expect(mockFizzbuzzService.answer).toHaveBeenCalled(); 
    }));

});