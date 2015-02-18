
var should = require('should');
var extend = require('../src/modules/extends');

describe('extendObject', function(){

	it('Test options object', function(){
		var optsINT = {
			option1 : "",
			option2 : false,
			option3 : 0
		};

		var optsEXT = {
			option1 : "test",
			option2 : true,
			option3 : 100,
			option4 : false
		};

		var newOpts = extend(optsINT, optsEXT);
		newOpts.option1.should.equal("test");
		newOpts.option2.should.equal(true);
		newOpts.option3.should.equal(100);
		newOpts.option4.should.equal(false);

	});

});