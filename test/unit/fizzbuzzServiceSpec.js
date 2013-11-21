describe('service', function() {

	beforeEach( module('fizzbuzz.services') );

	describe('fizzbuzzService', function() {

		it('should answer "?" for all number', inject(function(fizzbuzzService) {
	    	expect(fizzbuzzService.answer(1)).toEqual('?');
	    }));

	});

});