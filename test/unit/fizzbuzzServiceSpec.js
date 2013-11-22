
beforeEach( module('fizzbuzz.services') );

describe('fizzbuzzService', function() {

    it('should answer "fizz" if the number is divisible by 3 but not 5', inject(function(fizzbuzzService) {
    	expect(fizzbuzzService.answer(3)).toEqual('fizz');
    	expect(fizzbuzzService.answer(6)).toEqual('fizz');
    	expect(fizzbuzzService.answer(9)).toEqual('fizz');
    	expect(fizzbuzzService.answer(27)).toEqual('fizz');
    	expect(fizzbuzzService.answer(33)).toEqual('fizz');
    }));

    it('should answer "buzz" if the number is divisible by 5 but not 3', inject(function(fizzbuzzService) {
    	expect(fizzbuzzService.answer(5)).toEqual('buzz');
    	expect(fizzbuzzService.answer(10)).toEqual('buzz');
    	expect(fizzbuzzService.answer(20)).toEqual('buzz');
    	expect(fizzbuzzService.answer(25)).toEqual('buzz');
    	expect(fizzbuzzService.answer(35)).toEqual('buzz');
    }));

    it('should answer "fizzbuzz" if the number is divisible by 3 and 5', inject(function(fizzbuzzService) {
    	expect(fizzbuzzService.answer(15)).toEqual('fizzbuzz');
    	expect(fizzbuzzService.answer(30)).toEqual('fizzbuzz');
    	expect(fizzbuzzService.answer(45)).toEqual('fizzbuzz');
    }));

    it('should answer original number if the number is indivisible by 3 and 5', inject(function(fizzbuzzService) {
    	expect(fizzbuzzService.answer(1)).toEqual(1);
    	expect(fizzbuzzService.answer(2)).toEqual(2);
    	expect(fizzbuzzService.answer(4)).toEqual(4);
    	expect(fizzbuzzService.answer(11)).toEqual(11);
    }));

    it('should throw exception if input number is equal or less than 0', inject(function(fizzbuzzService) {
    	var test_0 = function() {
    		fizzbuzzService.answer(0);
    	}
    	var test_minus1 = function() {
    		fizzbuzzService.answer(-1);
    	}
    	var test_minus3 = function() {
    		fizzbuzzService.answer(-2);
    	}
    	var test_minus5 = function() {
    		fizzbuzzService.answer(-5);
    	}
    	var test_minus15 = function() {
    		fizzbuzzService.answer(-15);
    	}

    	expect(test_0).toThrow();
    	expect(test_minus1).toThrow();
    	expect(test_minus3).toThrow();
    	expect(test_minus5).toThrow();
    	expect(test_minus15).toThrow();
    }));

});
